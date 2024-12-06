import { BenefitsSection } from '@/components/layout/sections/benefits';
import { CommunitySection } from '@/components/layout/sections/community';
import { ContactSection } from '@/components/layout/sections/contact';
import CourseCarousel from '@/components/layout/sections/course-carousel';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { TeamSection } from '@/components/layout/sections/team';
import { TestimonialSection } from '@/components/layout/sections/testimonial';
import WhySection from '@/components/layout/sections/whysection';
import { Suspense } from 'react';

export const metadata = {
  title: 'Greenwich Central College',
  description: 'Educate your future',
  openGraph: {
    type: 'website',
    url: 'https://github.com/nobruf/shadcn-landing-page.git',
    title: 'Greenwich Central College',
    description: 'Educate your future',
    images: [
      {
        url: 'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg',
        width: 1200,
        height: 630,
        alt: 'Greenwich Central College',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <br />
      <FeaturesSection />
      <CourseCarousel />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      {/* <ServicesSection /> */}
      <WhySection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      {/* <Suspense>
        <ContactSection />
      </Suspense> */}
      {/* <FAQSection /> */}
    </>
  );
}
