import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guion Video: Miyamoto Musashi',
  description: 'Planifica tu próximo video sobre Miyamoto Musashi con una guía detallada.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
