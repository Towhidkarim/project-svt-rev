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

export default function CourseCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setInterval(() => {
      api.scrollNext();
      console.log('scrollNext');
    }, 3000);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
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
        <CarouselContent className=''>
          {courseInfo.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card className='rounded-lg border max-w-[400px] w-full'>
                  <CardHeader className=' h-[450px]  relative'>
                    <figure className='relative h-[300px] w-full'>
                      <Image
                        src={
                          item.imageUrl !== ''
                            ? item.imageUrl
                            : getRandomImage()
                        }
                        alt={item.title}
                        className='object-contain'
                        fill
                      />
                    </figure>
                    <div className='px-2 py-2 rounded-r-lg absolute top-3 left-0 text-primary-foreground bg-primary font-bold grid place-items-center'>
                      £{item.priceInCurrency}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className='text-base'>
                      {item.subTitle !== ''
                        ? item.subTitle.substring(0, 128)
                        : item.caption !== ''
                        ? item.caption
                        : item.courseDetails.substring(0, 128)}
                      ...
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex h-[100px] items-center justify-center p-6'>
                    <Button asChild>
                      <Link href={`courses/${item.courseUniqueId}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
