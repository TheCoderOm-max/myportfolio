import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Om Bhattarai — Software Engineer',
  description:
    'Om Bhattarai — Software Engineer focused on AI, scalable systems, and modern web applications.',
  metadataBase: new URL('https://ombhattarai.dev'),
  openGraph: {
    title: 'Om Bhattarai — Software Engineer',
    description:
      'Software Engineer focused on AI, scalable systems, and modern web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jbMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
