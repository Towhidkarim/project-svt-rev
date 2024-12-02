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
import ProjectCard from '@/components/ui/project-card';

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
  if (!courseCategories.includes(param)) currentCourse = courseInfo;
  else currentCourse = courseInfo.filter((item) => item.category === param);

  return (
    <div className='container flex flex-col gap-10 py-24 sm:py-12'>
      <div className='w-full'>
        <h1 className='text-4xl block pb-2 font-bold md:font-extrabold'>
          {/*@ts-ignore */}
          {!courseCategories.includes(param)
            ? 'All Courses'
            : //@ts-ignore
              param}
        </h1>
        <h2 className='text-lg'>Select a course from below</h2>
        <br />
        <div className='mx-auto flex-wrap my-4 flex gap-4 items-center justify-center w-full'>
          <Button
            size='sm'
            //@ts-ignore
            variant={!courseCategories.includes(param) ? 'default' : 'outline'}
          >
            <Link href={`/courses`}>All Courses</Link>
          </Button>
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
          {currentCourse.map((item, index) => (
            <ProjectCard {...item} key={index} />
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
