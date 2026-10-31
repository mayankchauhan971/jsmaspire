import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jsmaspirefoundation.org'),
  title: 'JSM ASPIRE ACADEMY PVT. LTD. | Capacity Building & Skill Development',
  description: 'Multidisciplinary learning, training, and capacity-building organization delivering high-quality, outcome-driven training solutions across government, education, corporate, and community sectors.',
  keywords: [
    'Training Academy India',
    'Capacity Building',
    'Government Training',
    'Corporate Learning',
    'Skill Development',
    'Teacher Training',
    'Workforce Development',
    'JSM Aspire Academy',
    'Training of Trainers',
    'Livelihood Programs'
  ],
  authors: [{ name: 'JSM ASPIRE ACADEMY PVT. LTD.' }],
  robots: 'index, follow',
  openGraph: {
    title: 'JSM ASPIRE ACADEMY PVT. LTD. | Building Capacity. Empowering People. Creating Impact.',
    description: 'Premier training & capacity building academy for government departments, educational institutions, corporates, and development organizations.',
    url: 'https://www.jsmaspirefoundation.org',
    siteName: 'JSM ASPIRE ACADEMY PVT. LTD.',
    images: [
      {
        url: '/jsm-logo.png',
        width: 800,
        height: 800,
        alt: 'JSM ASPIRE ACADEMY Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSM ASPIRE ACADEMY PVT. LTD.',
    description: 'Building Capacity. Empowering People. Creating Impact.',
    images: ['/jsm-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'JSM ASPIRE ACADEMY PVT. LTD.',
              url: 'https://www.jsmaspirefoundation.org',
              logo: 'https://www.jsmaspirefoundation.org/jsm-logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-6009874892',
                contactType: 'customer service',
                email: 'info@jsmaspirefoundation.org',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
              },
              slogan: 'Building Capacity. Empowering People. Creating Impact.',
              description: 'Multidisciplinary learning, training, and capacity-building organization.',
            }),
          }}
        />
      </head>
      <body className="bg-cream text-charcoal flex flex-col min-h-screen selection:bg-gold selection:text-navy antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
