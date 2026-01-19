export default function SEO({ 
  name, 
  description, 
  category, 
  operatingSystem, 
  image, 
  slug 
}: { 
  name: string; 
  description: string;
  category?: string;
  operatingSystem?: string;
  image?: string;
  slug?: string;
}) {
  return (
    <>
      <title>{`${name} - Baixa Já Downloads`}</title>
      <meta name="description" content={description} />
      {category && <meta name="category" content={category} />}
    </>
  );
}
