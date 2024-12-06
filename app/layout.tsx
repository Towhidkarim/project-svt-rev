import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { FooterSection } from '@/components/layout/sections/footer';
import ChatButton from '@/components/layout/chat-button';
import { CartProvider } from '@/lib/cart-context';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SVT',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Navbar />
            <Toaster />
            <NextTopLoader />
            {children}

            <ChatButton />
            <div className='dark dark:bg-[#013466] bg-[#013466] w-full '>
              <FooterSection />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
