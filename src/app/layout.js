import './globals.css';
import CyberCanvas from '../components/CyberCanvas';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://neonverse.vercel.app'),
  title: 'HIMANSHU TIWARI // NEONVERSE - Futuristic Developer Portfolio',
  description: 'The futuristic developer universe of Himanshu Tiwari — Technical Associate at AIVOT AI, B.Sc. Computer Science Graduate, AI Enthusiast & Full-Stack Engineer.',
  keywords: ['Himanshu Tiwari', 'NEONVERSE', 'AIVOT AI', 'Technical Associate', 'Full Stack Developer', 'Next.js', 'React', 'Python', 'Cyberpunk Portfolio', 'NEXORA'],
  authors: [{ name: 'Himanshu Tiwari' }],
  creator: 'Himanshu Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neonverse.vercel.app',
    siteName: 'NEONVERSE // HIMANSHU TIWARI',
    title: 'HIMANSHU TIWARI // NEONVERSE - Futuristic Developer Portfolio',
    description: 'Technical Associate at AIVOT AI & B.Sc. Computer Science Graduate. Resilient Full-Stack Applications, AI Integrations, and Next-Gen Cyber Interfaces.',
    images: [
      {
        url: '/warrior.jpg',
        width: 1200,
        height: 630,
        alt: 'Himanshu Tiwari - NEONVERSE Cyber Warrior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIMANSHU TIWARI // NEONVERSE',
    description: 'Technical Associate at AIVOT AI & Full-Stack Engineer. Building AI integrations and futuristic web platforms.',
    images: ['/warrior.jpg'],
    creator: '@himanshutiwari',
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  themeColor: '#C6FF36',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-nx-bg text-white min-h-screen flex flex-col overflow-x-hidden">
        <CyberCanvas />
        <div className="fixed inset-0 pointer-events-none z-10 nx-scanlines opacity-20" />
        <Navbar />
        <div className="flex-1 relative z-20 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
