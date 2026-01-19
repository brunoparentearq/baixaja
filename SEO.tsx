// components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  name: string;
  description: string;
  category: string;
  operatingSystem: string;
  image: string;
  slug: string;
  version?: string;
}

export default function SEO({ name, description, category, operatingSystem, image, slug, version }: SEOProps) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "operatingSystem": operatingSystem,
    "applicationCategory": category,
    "softwareVersion": version || "1.0",
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "85"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TechnicalService",
    "name": "Suporte Remoto Especializado",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Especialista em TI - 20 Anos de Experiência",
      "image": "/avatar-tecnico.jpg"
    },
    "description": `Suporte técnico profissional para instalação de ${name} via AnyDesk ou TeamViewer.`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([softwareSchema, serviceSchema]) }}
    />
  );
}
