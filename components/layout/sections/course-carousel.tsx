'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
import { courseInfo } from '@/lib/courseInfo';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getRandomImage } from '@/lib/utils';
import { type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ui/project-card';

export default function CourseCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
    setInterval(() => {
      api.scrollNext();
      console.log('scrollNext');
    }, 3000);

    // setCount(api.scrollSnapList().length);
    // setCurrent(api.selectedScrollSnap() + 1);

    // api.on('select', () => {
    //   setCurrent(api.selectedScrollSnap() + 1);
    // });
  }, [api]);
  // useEffect(() => {
  //   if(current == count)
  //     api.scrollNext()
  // });

  return (
    <div className='container mx-auto my-20'>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          active: true,
        }}
        plugins={[
          Autoplay({
            delay: 20000,
          }),
        ]}
        className='relative group mt-14'
      >
        <CarouselContent className='py-5'>
          {courseInfo.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <ProjectCard {...item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
