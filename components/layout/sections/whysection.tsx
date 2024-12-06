import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BookOpenCheck,
  CircleCheckBig,
  CreditCard,
  GraduationCap,
  icons,
  ShieldCheck,
  SwatchBook,
} from 'lucide-react';

const featureList = [
  {
    icon: BookOpenCheck,
    title: 'Trusted and Regulated',
    description: 'Study A Levels, GCSEs, Qualifications, and Endorsed Courses ',
  },
  {
    icon: ShieldCheck,
    title: 'Personal expert support',
    description:
      'Full 1-2-1 tutor support on all courses every step of the way ',
  },
  {
    icon: GraduationCap,
    title: 'Independently accredited ',
    description: 'Our courses are accredited by independent awarding bodies',
  },
  {
    icon: SwatchBook,
    title: 'Flexible, simple learning ',
    description: 'Study at your own pace in your own space, without pressure ',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment Plans',
    description:
      'We offer 0% APR on all instalment plans for all our online courses. We believe students should have the option to pay in flexible payments that suit them. ',
  },
];

export default function WhySection() {
  return (
    <section id='features' className='container py-24 sm:py-32'>
      {/* <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Benefits
      </h2> */}
      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Why Learn With Us?
      </h2>
      <br /> <br />
      <div className='flex flex-row flex-wrap justify-center items-center gap-3 lg:px-32'>
        {featureList.map(({ title, description, icon: Icon }) => (
          <div key={title} className='flex flex-row justify-center items-start'>
            <div className='bg-primary/20 p-2 rounded-xl mt-3 ring-8 ring-primary/10'>
              <Icon size={38} strokeWidth={2.5} className='stroke-primary' />
            </div>
            <Card className='h-full mx-auto max-w-[400px] bg-background border-0 shadow-none '>
              <CardHeader className='flex justify-center items-start'>
                <CardTitle className='capitalize'>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground -mt-2'>
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
