import { useEffect } from 'react';
import { seoConfigs, PageSEOConfig, DEFAULT_OG_IMAGE, SITE_BASE_URL } from '../config/seo';

interface SEOHeadProps extends Partial<PageSEOConfig> {
  pageKey?: keyof typeof seoConfigs;
}

/**
 * Enterprise SEO & Metadata Injection Component.
 * Dynamically manages document title, meta descriptions, canonical links,
 * Open Graph metadata, Twitter/X cards, robots directives, and JSON-LD structured data.
 */
export default function SEOHead(props: SEOHeadProps) {
  const config: PageSEOConfig = {
    ...(props.pageKey && seoConfigs[props.pageKey] ? seoConfigs[props.pageKey] : {}),
    ...props,
  } as PageSEOConfig;

  const {
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = DEFAULT_OG_IMAGE,
    robots = 'index, follow',
    breadcrumbs,
    jsonLd,
  } = config;

  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to set or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (robots) {
      setMetaTag('name', 'robots', robots);
    }

    // 3. Canonical URL
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // 4. Open Graph Tags
    if (title) {
      setMetaTag('property', 'og:title', title);
    }
    if (description) {
      setMetaTag('property', 'og:description', description);
    }
    if (canonical) {
      setMetaTag('property', 'og:url', canonical);
    }
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Aura Global Trade');

    // 5. Twitter / X Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    if (title) {
      setMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      setMetaTag('name', 'twitter:description', description);
    }
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data Injection
    const scriptId = 'aura-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    // Assemble breadcrumbs schema if present
    let breadcrumbJsonLd = null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      };
    }

    const payload = jsonLd
      ? breadcrumbJsonLd
        ? [jsonLd, breadcrumbJsonLd]
        : jsonLd
      : breadcrumbJsonLd;

    if (payload) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(payload);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonical, ogType, ogImage, robots, breadcrumbs, jsonLd]);

  return null;
}
