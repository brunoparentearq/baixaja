export default function SEO({ name, description }: { name: string, description: string }) {
  return (
    <>
      <title>{`${name} - Baixa Já Downloads`}</title>
      <meta name="description" content={description} />
    </>
  );
}
