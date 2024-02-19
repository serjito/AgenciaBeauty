import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Agencia Beauty',
  description:
    'Agencia de marketing digital. Especializada en salones de belleza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`{montserrat.className} bg-[#f2f6fe]`}>{children}</body>
    </html>
  );
}
