import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baixa Já - Downloads Seguros",
  description: "20 Anos de Experiência em TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
