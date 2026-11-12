import { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Lock,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import { useRetailCart } from '../../context/RetailCartContext';

export default function RetailCartDrawer() {
  const {
    items,
    itemCount,
    subtotalINR,
    subtotalUSD,
    subtotalAED,
    freeShippingThresholdINR,
    freeShippingThresholdUSD,
    isFreeShipping,
    amountNeededForFreeShippingINR,
    amountNeededForFreeShippingUSD,
    isCartDrawerOpen,
    closeCart,
    openCheckout,
    currency,
    setCurrency,
    updateQuantity,
    removeItem,
  } = useRetailCart();

  const [orderNote, setOrderNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  if (!isCartDrawerOpen) return null;

  const currentSubtotal = currency === 'INR' ? subtotalINR : currency === 'USD' ? subtotalUSD : subtotalAED;
  const currencySymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : 'AED ';
  const shippingThreshold = currency === 'INR' ? freeShippingThresholdINR : currency === 'USD' ? freeShippingThresholdUSD : 275;
  const progressPercent = Math.min(100, Math.round((currentSubtotal / shippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-[120] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside 
        className="relative z-10 w-full max-w-md bg-[#0e0e0d] border-l border-[#dcb782]/20 text-white flex flex-col h-full shadow-[0_0_60px_rgba(0,0,0,0.95)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#141412]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#dcb782]" />
            <span className="font-heading text-lg font-medium tracking-tight text-white">
              Gourmet Pantry Cart
            </span>
            <span className="text-xs font-mono bg-[#dcb782]/15 text-[#dcb782] px-2 py-0.5 rounded-full font-bold">
              {itemCount}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Currency toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-0.5 rounded ${currency === 'INR' ? 'bg-[#dcb782] text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded ${currency === 'USD' ? 'bg-[#dcb782] text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                $ USD
              </button>
              <button
                type="button"
                onClick={() => setCurrency('AED')}
                className={`px-2 py-0.5 rounded ${currency === 'AED' ? 'bg-[#dcb782] text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
              >
                AED
              </button>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#1c1813] to-[#121211] border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-4 h-4 text-[#dcb782] shrink-0" />
            <span className="text-xs text-[#E2BC86] font-medium">
              {isFreeShipping ? (
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Free Worldwide Express Shipping Unlocked!
                </span>
              ) : (
                <span>
                  Add{' '}
                  <strong>
                    {currencySymbol}
                    {currency === 'INR'
                      ? amountNeededForFreeShippingINR.toLocaleString('en-IN')
                      : currency === 'USD'
                        ? amountNeededForFreeShippingUSD.toFixed(2)
                        : (amountNeededForFreeShippingUSD * 3.67).toFixed(0)}
                  </strong>{' '}
                  more for Free Worldwide Express Air Shipping
                </span>
              )}
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#ab8558] to-[#dcb782] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782]/60">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-heading text-lg text-white">Your cart is empty</p>
                <p className="text-xs text-neutral-400 max-w-xs font-light">
                  Discover our single-origin turmeric, Tellicherry black pepper, and royal imperial blends in airtight gourmet tins.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 text-xs font-mono uppercase tracking-widest bg-[#dcb782] text-black px-6 py-3 rounded-xl font-bold hover:bg-[#c9a26d] transition-all cursor-pointer"
              >
                Explore Spices Collection
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = currency === 'INR' 
                ? (item.variant.priceINR ?? Math.round(item.variant.priceUSD * 85))
                : currency === 'USD' 
                  ? item.variant.priceUSD 
                  : item.variant.priceAED;
              const itemTotal = itemPrice * item.quantity;

              return (
                <div 
                  key={item.id} 
                  className="bg-[#141412] border border-white/10 rounded-xl p-3.5 flex gap-3.5 hover:border-[#dcb782]/30 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-[#0a0a09]">
                    <img 
                      src={item.product.heroImage} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-medium text-white font-heading truncate">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#dcb782] font-mono truncate mt-0.5">
                        {item.variant.name}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/5">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/15 rounded-lg bg-black/40 text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-white font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total for item */}
                      <div className="text-right">
                        <span className="text-sm font-mono font-bold text-white">
                          {currencySymbol}{currency === 'USD' ? itemTotal.toFixed(2) : Math.round(itemTotal).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#121211] space-y-4">
            {/* Order Note Toggle */}
            <div>
              <button
                type="button"
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="text-xs text-[#dcb782] hover:underline font-mono cursor-pointer"
              >
                {showNoteInput ? '− Hide Gift Note / Chef Instructions' : '+ Add Gift Note or Custom Milling Instructions'}
              </button>
              {showNoteInput && (
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Special instructions for customs, luxury gift packaging, or batch requirements..."
                  rows={2}
                  className="w-full mt-2 bg-black/50 border border-white/15 rounded-lg p-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                />
              )}
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex justify-between text-xs text-neutral-400 font-body">
                <span>Subtotal ({itemCount} items)</span>
                <span className="font-mono text-white font-medium">
                  {currencySymbol}{currency === 'USD' ? currentSubtotal.toFixed(2) : Math.round(currentSubtotal).toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400 font-body">
                <span>Worldwide Express Shipping</span>
                <span className="font-mono font-medium">
                  {isFreeShipping ? (
                    <span className="text-emerald-400">FREE</span>
                  ) : (
                    <span className="text-neutral-400">Calculated next</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-heading font-medium text-white pt-2 border-t border-white/10">
                <span>Estimated Total</span>
                <span className="font-mono text-lg text-[#E2BC86] font-bold">
                  {currencySymbol}{currency === 'USD' ? currentSubtotal.toFixed(2) : Math.round(currentSubtotal).toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[10px] text-neutral-500 font-light">
                Duties & local sales tax included. Dispatched via express courier with full tracking.
              </p>
            </div>

            {/* Checkout Action */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={openCheckout}
                className="w-full py-4 bg-gradient-to-r from-[#dcb782] to-[#E2BC86] hover:from-[#c9a26d] hover:to-[#d4a86a] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(220,183,130,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <Lock className="w-4 h-4" />
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={closeCart}
                className="w-full py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors text-center cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-center gap-4 text-[11px] text-neutral-400 font-light">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dcb782]" />
                100% Purity
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#dcb782]" />
                Aroma Shield Tin
              </span>
              <span>•</span>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
