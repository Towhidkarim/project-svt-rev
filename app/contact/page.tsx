import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FooterSection } from '@/components/layout/sections/footer';
import React, { Suspense } from 'react';

export default function Page() {
  return (
    <section className='container mx-auto flex flex-col gap-10 py-24 sm:py-12'>
      <Suspense>
        <ContactSection />
      </Suspense>
      <FooterSection />
    </section>
  );
}
