/**
 * AURA EXPORTS — Dynamic Currency Conversion & Formatting Service
 * 
 * Supports:
 * - INR (₹) — Default base currency
 * - USD ($) — International Americas & Global
 * - AED (د.إ) — Middle East & Gulf
 * 
 * Features:
 * - Single source of truth INR base pricing
 * - Live exchange rate caching with fallback rates
 * - Proper currency-specific rounding
 * - Price per 100g / unit calculations
 */

export type CurrencyCode = 'INR' | 'USD' | 'AED';

export interface ExchangeRates {
  INR: number; // 1.0 (base)
  USD: number; // e.g. 0.0116 (1 USD ~ 86.2 INR)
  AED: number; // e.g. 0.0426 (1 AED ~ 23.5 INR)
  lastUpdated: number;
}

// Conservative default fallback rates if offline / API unreachable
const FALLBACK_RATES: ExchangeRates = {
  INR: 1.0,
  USD: 0.0116, // 1 INR = ~0.0116 USD (86.20 INR = 1 USD)
  AED: 0.0426, // 1 INR = ~0.0426 AED (23.47 INR = 1 AED)
  lastUpdated: Date.now(),
};

const CACHE_KEY = 'aura_exchange_rates_v1';
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

class CurrencyService {
  private rates: ExchangeRates = FALLBACK_RATES;
  private isFetching = false;

  constructor() {
    this.loadCachedRates();
    this.refreshRatesIfStale();
  }

  private loadCachedRates(): void {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as ExchangeRates;
        if (parsed.USD && parsed.AED && parsed.lastUpdated) {
          this.rates = parsed;
        }
      }
    } catch {
      // Use fallback rates safely
    }
  }

  private async refreshRatesIfStale(): Promise<void> {
    const isStale = Date.now() - this.rates.lastUpdated > CACHE_DURATION_MS;
    if (!isStale || this.isFetching) return;

    this.isFetching = true;
    try {
      // Use reliable public open-access exchange rates API
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch('https://open.er-api.com/v6/latest/INR', {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.rates && data.rates.USD && data.rates.AED) {
          this.rates = {
            INR: 1.0,
            USD: Number(data.rates.USD),
            AED: Number(data.rates.AED),
            lastUpdated: Date.now(),
          };
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(this.rates));
          } catch {
            // Storage quota or private browsing mode
          }
        }
      }
    } catch {
      // Graceful fallback to cached or built-in rates
    } finally {
      this.isFetching = false;
    }
  }

  /**
   * Get active exchange rate from INR base
   */
  public getRate(currency: CurrencyCode): number {
    return this.rates[currency] || 1.0;
  }

  /**
   * Convert base INR price to target currency with specific rounding
   */
  public convertFromINR(amountINR: number, currency: CurrencyCode): number {
    if (currency === 'INR') {
      return Math.round(amountINR);
    }
    const rate = this.getRate(currency);
    const converted = amountINR * rate;

    if (currency === 'USD') {
      // 2 decimal places for USD, rounded to .x9 or .x5 commercial standard
      return Math.round(converted * 100) / 100;
    }

    if (currency === 'AED') {
      // 2 decimal places for AED
      return Math.round(converted * 100) / 100;
    }

    return converted;
  }

  /**
   * Format an INR base amount into localized display string with currency symbol and code
   */
  public formatPrice(
    amountINR: number,
    currency: CurrencyCode,
    options?: { showCode?: boolean; prefixFrom?: boolean }
  ): string {
    const converted = this.convertFromINR(amountINR, currency);
    const prefix = options?.prefixFrom ? 'From ' : '';

    switch (currency) {
      case 'INR': {
        const formatted = Math.round(converted).toLocaleString('en-IN');
        return options?.showCode ? `${prefix}₹${formatted} INR` : `${prefix}₹${formatted}`;
      }
      case 'USD': {
        const formatted = converted.toFixed(2);
        return options?.showCode ? `${prefix}$${formatted} USD` : `${prefix}$${formatted}`;
      }
      case 'AED': {
        const formatted = converted.toFixed(2);
        return options?.showCode ? `${prefix}AED ${formatted}` : `${prefix}د.إ ${formatted}`;
      }
      default:
        return `₹${amountINR}`;
    }
  }

  /**
   * Format price per 100g (or per capsule/unit)
   */
  public formatUnitPrice(
    amountINR: number,
    weightGrams?: number,
    unitCount?: number,
    currency: CurrencyCode = 'INR'
  ): string {
    if (unitCount && unitCount > 0) {
      const perUnitINR = amountINR / unitCount;
      const converted = this.convertFromINR(perUnitINR, currency);
      if (currency === 'INR') {
        return `₹${converted.toFixed(2)} / cap`;
      } else if (currency === 'USD') {
        return `$${converted.toFixed(2)} / cap`;
      } else {
        return `AED ${converted.toFixed(2)} / cap`;
      }
    }

    if (weightGrams && weightGrams > 0) {
      const per100gINR = (amountINR / weightGrams) * 100;
      const converted = this.convertFromINR(per100gINR, currency);
      if (currency === 'INR') {
        return `₹${converted.toFixed(1)} / 100g`;
      } else if (currency === 'USD') {
        return `$${converted.toFixed(2)} / 100g`;
      } else {
        return `AED ${converted.toFixed(2)} / 100g`;
      }
    }

    return '';
  }

  /**
   * Calculate mathematically genuine discount percentage
   */
  public calculateDiscountPercent(sellingINR: number, mrpINR?: number): number | null {
    if (!mrpINR || mrpINR <= sellingINR) return null;
    const discount = Math.round(((mrpINR - sellingINR) / mrpINR) * 100);
    return discount > 0 ? discount : null;
  }
}

export const currencyService = new CurrencyService();
