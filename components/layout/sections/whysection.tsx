import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheckBig } from 'lucide-react';

const featureList = [
  {
    title: 'Trusted and Regulated',
    description: 'Study A Levels, GCSEs, Qualifications, and Endorsed Courses ',
  },
  {
    title: 'Personal expert support',
    description:
      'Full 1-2-1 tutor support on all courses every step of the way ',
  },
  {
    title: 'Independently accredited ',
    description: 'Our courses are accredited by independent awarding bodies',
  },
  {
    title: 'Flexible, simple learning ',
    description: 'Study at your own pace in your own space, without pressure ',
  },
];

export default function WhySection() {
  return (
    <section id='features' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Benefits
      </h2>
      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Why Learn With Us?
      </h2>
      <br /> <br />
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-3 lg:px-32'>
        {featureList.map(({ title, description }) => (
          <div key={title} className='flex flex-row justify-center'>
            <div className='bg-primary/20 p-2 rounded-xl mt-3 ring-8 ring-primary/10 dark:bg-slate-50/55'>
              <CircleCheckBig
                size={38}
                strokeWidth={3}
                className='stroke-primary'
              />
            </div>
            <Card className='h-full max-w-[350px] bg-background border-0 shadow-none '>
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
