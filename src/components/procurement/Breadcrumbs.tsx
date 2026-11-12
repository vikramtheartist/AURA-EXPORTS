import { Link } from 'react-router-dom';
import { SITE_BASE_URL } from '../../config/seo';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  backLink?: { label: string; href: string };
  className?: string;
}

export default function Breadcrumbs({
  items,
  backLink,
  className = '',
}: BreadcrumbsProps) {
  // Normalize root label: clean "← " or " HOME" suffix to guarantee "AURA EXPORTS"
  let rootLabel = 'AURA EXPORTS';
  let rootHref = '/';

  if (backLink) {
    rootHref = backLink.href;
    const cleanLabel = backLink.label.replace(/^[←\s]+/, '').replace(/\s+HOME$/i, '').trim();
    if (cleanLabel) {
      rootLabel = cleanLabel;
    }
  }

  // Filter out any redundant 'Home' or 'Aura Exports' from items array
  const pathItems = items.filter((it) => {
    const l = it.label.trim().toLowerCase();
    return l !== 'home' && l !== 'aura exports' && l !== 'aura exports home';
  });

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: rootLabel,
        item: SITE_BASE_URL,
      },
      ...pathItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `${SITE_BASE_URL}${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <nav
        aria-label="Breadcrumbs"
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-6 sm:mb-8 flex items-center flex-wrap gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#A29B91] ${className}`}
      >
        {/* Root Back Link: ← AURA EXPORTS */}
        <Link
          to={rootHref}
          className="flex items-center gap-1.5 hover:text-[#F2E9D9] transition-colors shrink-0"
        >
          <span>← {rootLabel}</span>
        </Link>

        {/* Separator and Path Items */}
        {pathItems.map((item, idx) => {
          const isLast = idx === pathItems.length - 1;

          return (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <span className="text-[#77716A]" aria-hidden="true">/</span>
              {isLast || !item.href ? (
                <span
                  className="text-[#F2E9D9] font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-[#F2E9D9] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
