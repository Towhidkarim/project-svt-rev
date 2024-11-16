'use client';
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
import { courseInfo } from '@/lib/courseInfo';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CourseCarousel() {
  return (
    <div className='container mx-auto my-20'>
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
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card className='rounded-lg border max-w-[400px] w-full'>
                  <CardHeader className=' h-[450px]  relative'>
                    <figure className='relative h-[300px] w-full'>
                      <Image
                        src={
                          item.imageUrl !== ''
                            ? item.imageUrl
                            : '/diplomaBBA.png'
                        }
                        alt={item.title}
                        className='object-contain'
                        fill
                      />
                    </figure>
                    <div className='px-2 py-2 rounded-r-lg absolute top-3 left-0 text-primary-foreground bg-primary font-bold grid place-items-center'>
                      $14.99
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
      </Carousel>
    </div>
  );
}
