import React, { useEffect } from 'react';
import { FAQItem } from '../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  faqItems?: FAQItem[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  faqItems,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set meta tags
    const setMetaTag = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[property="og:title"]', title);
    setMetaTag('meta[property="og:description"]', description);
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);

    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'https://qcminhtien.ai.studio';
    const fullUrl = `${origin}${canonicalPath === '/' ? '' : canonicalPath}`;

    setMetaTag('meta[property="og:url"]', fullUrl);
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', fullUrl);
    }
  }, [title, description, canonicalPath]);

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  if (!faqSchema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
