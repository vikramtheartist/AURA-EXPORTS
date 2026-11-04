import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
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
  backLink = { label: 'AURA EXPORTS HOME', href: '/' },
  className = '',
}: BreadcrumbsProps) {
  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_BASE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8 flex flex-wrap items-center justify-between text-xs font-mono tracking-wider text-[#ab8558]/80 font-bold gap-4 ${className}`}
      >
        <Link
          to={backLink.href}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{backLink.label}</span>
        </Link>

        <ol className="flex flex-wrap items-center gap-2 list-none m-0 p-0">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
                {isLast || !it.href ? (
                  <span className="text-white uppercase" aria-current="page">
                    {it.label}
                  </span>
                ) : (
                  <Link
                    to={it.href}
                    className="hover:text-white transition-colors uppercase opacity-80"
                  >
                    {it.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
