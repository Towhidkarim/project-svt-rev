import { Button } from '@/components/ui/button';
import { categories } from '@/lib/constants';
import { courseCategories, courseInfo } from '@/lib/courseInfo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page({
  params,
  searchParams,
}: {
  params: { course: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let currentCourse = [courseInfo[0]];
  const param = searchParams['cat'];
  //@ts-ignore
  if (!courseCategories.includes(param)) currentCourse = courseInfo;
  else currentCourse = courseInfo.filter((item) => item.category === param);

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
        <div className='flex gap-12 flex-col mx-auto md:ml-10'>
          {currentCourse.map((item, index) => (
            <div
              key={index}
              className='flex md:flex-row flex-col gap-2 justify-start items-center '
            >
              <figure className='size-60  relative border rounded-md mx-4'>
                <Image src={item.imageUrl} alt={item.title} fill />
              </figure>
              <div className='border-b w-full my-5'>
                <h1 className='md:text-2xl text-xl'>{item.title}</h1>
                <hr />
                <h3 className='text-lg text-muted-foreground'>
                  {item.caption}
                </h3>
                <Button className='my-5' asChild>
                  <Link href={`/courses/${item.courseUniqueId}`}>
                    View Course
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {currentCourse.length === 0 ? (
          <h1 className='text-center text-lg opacity-70'>
            No course available from this category yet
          </h1>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
