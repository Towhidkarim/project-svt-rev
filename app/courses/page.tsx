import { Button } from '@/components/ui/button';
import { categories } from '@/lib/constants';
import { courseCategories, courseInfo } from '@/lib/courseInfo';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getRandomImage } from '@/lib/utils';

export default function Page({
  params,
  searchParams,
}: {
  params: { course: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let currentCourse = [];
  const param = searchParams['cat'];
  //@ts-ignore
  // if (!courseCategories.includes(param)) currentCourse = [];
  currentCourse = courseInfo.filter((item) => item.category === param);

  return (
    <div className='container flex flex-col gap-10 py-24 sm:py-12'>
      <div className='w-full'>
        <h1 className='text-4xl border-b-2 block pb-2 mb-5 font-bold md:font-extrabold'>
          Courses From Category
        </h1>
        <div className='mx-auto flex-wrap my-4 flex gap-4 items-center justify-center w-full'>
          {courseCategories.map((item, index) => (
            <Button
              key={index}
              size='sm'
              variant={param === item ? 'default' : 'outline'}
            >
              <Link href={`/courses?cat=${item}`}>{item}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div className='w-full'>
        <div className='flex gap-12 flex-row flex-wrap mx-auto md:ml-10'>
          {currentCourse.map((item, index) => (
            <Card
              key={index}
              className='rounded-lg border max-w-[400px] w-full'
            >
              <CardHeader className=' h-[450px]  relative'>
                <figure className='relative h-[300px] w-full'>
                  <Image
                    src={
                      item.imageUrl !== '' ? item.imageUrl : getRandomImage()
                    }
                    alt={item.title}
                    loading='lazy'
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
          ))}
        </div>
        <h1 className='text-center text-lg opacity-70'>
          {currentCourse.length === 0 && param
            ? 'No course available from this category yet'
            : currentCourse.length === 0 && !param
            ? 'Select A course Category'
            : ''}
        </h1>
      </div>
    </div>
  );
}
