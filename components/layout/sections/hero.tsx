'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Autoplay from 'embla-carousel-autoplay';
import { routes } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { courseInfo } from '@/lib/courseInfo';
import { Marquee } from '@devnomic/marquee';

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className=' container  w-full'>
      <video
        autoPlay
        muted
        loop
        id='myVideo'
        className=' absolute top-0 left-0 -z-50 w-screen h-auto blur-sm min-h-[80vh] object-cover'
      >
        <source
          src='https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/videos/hero.mp4'
          type='video/mp4'
        />
        Your browser does not support HTML5 video.
      </video>
      <div className='w-full aspect-video absolute top-0 left-0 -z-20 bg-black/30 blur-sm min-h-[80vh] '></div>
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32'>
        <div className='text-center space-y-8 text-white'>
          {/* <Badge variant='outline' className='text-sm py-2'>
            <span className='mr-2 text-primary'>
              <Badge>New</Badge>
            </span>
            <span className='text-white'> A New Course is Out! </span>
          </Badge> */}

          <div className='max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold'>
            <h1 className='text-md:4xl text-2xl my-2 opacity-90 mx-auto w-[300px] border rounded-full p-1.5 bg-white/10'>
              Educate Your Future
            </h1>
            <h1 className=' rounded-lg'>
              Study with
              <br />
              <span className=' text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text'>
                {/* <span className='text-primary drop-shadow-xl px-2 block shadow-lg'> */}
                Greenwich Central College
              </span>
            </h1>
          </div>

          <p className='max-w-screen-sm mx-auto text-xl text-white/60'>
            We provide career-focused training in Health, Business, and
            Hospitality, guiding learners to the right qualifications.
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <Button
              className='w-5/6 md:w-1/4 font-bold group/arrow hover:opacity-95'
              asChild
            >
              <Link href={routes.courses}>
                Get Started
                <ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
              </Link>
            </Button>

            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold hover:opacity-95'
            >
              <Link href='#faq'>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
