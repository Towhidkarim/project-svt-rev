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

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className='container w-full'>
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32'>
        <div className='text-center space-y-8'>
          <Badge variant='outline' className='text-sm py-2'>
            <span className='mr-2 text-primary'>
              <Badge>New</Badge>
            </span>
            <span> A New Course is Out! </span>
          </Badge>

          <div className='max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold'>
            <h1 className='text-md:4xl text-2xl my-2'>Educate Your Future</h1>
            <h1>
              Study with
              <br />
              <span className='text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text'>
                Greenwich Central College
              </span>
            </h1>
          </div>

          <p className='max-w-screen-sm mx-auto text-xl text-muted-foreground'>
            We provide career-focused training in Health, Business, and
            Hospitality, guiding learners to the right qualifications.
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <Button className='w-5/6 md:w-1/4 font-bold group/arrow' asChild>
              <Link href={routes.courses}>
                Get Started
                <ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
              </Link>
            </Button>

            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold'
            >
              <Link href='#faq'>Learn More</Link>
            </Button>
          </div>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className='relative group mt-14'
        >
          <CarouselContent className=''>
            {courseInfo.map((item, index) => (
              <CarouselItem
                key={index}
                className='relative  md:basis-1/2 lg:basis-1/3 h-[450px]'
              >
                <div className='absolute top-3 left-3 font-bold tracking-wider w-24 text-center bg-primary text-primary-foreground p-2 z-10 rounded-lg border border-muted'>
                  ${item.priceInCurrency}
                </div>
                <Image
                  width={1200}
                  height={1200}
                  className='w-[400px] h-[200px] object-cover mx-auto rounded-lg relative rouded-lg leading-none flex items-center  '
                  src={item.imageUrl}
                  alt='dashboard'
                />
                <div className='absolute bg-gradient-to-t min-h-44 text-ellipsis line-clamp-4 light:from-white to-transparent bottom-0'>
                  <div className='font-semibold text-lg  my-3 overflow-hidden'>
                    {item.title}
                  </div>
                  <div className='my-2 text-muted-foreground'>
                    {item.caption.substring(0, 128)}...
                  </div>
                  <Button className=' mx-auto mt-5' asChild>
                    <Link href={`/courses/${item.courseUniqueId}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
                {/* <div className='p-1'>
                  <Card className='rounded-lg border max-w-[400px] w-full'>
                    <CardHeader className='bg-slate-500 h-44  relative'>
                      <div className='px-1 py-2 rounded-r-lg absolute top-3 left-0 text-primary-foreground bg-primary font-semibold grid place-items-center'>
                        $14.99
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='flex aspect-[9/12] items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div> */}

                {/* <div className='absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg'></div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
