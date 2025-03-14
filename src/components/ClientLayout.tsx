'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <AnimatePresence initial={false}>
          <PageWrapper key={pathname}>
            {children}
          </PageWrapper>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
} 