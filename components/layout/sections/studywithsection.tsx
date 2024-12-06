import React from 'react';
import sideImg from '@/public/learn-min.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function StudyWithSection() {
  return (
    <div className='container mx-auto rounded-2xl px-0 justify-between flex flex-col-reverse md:flex-row bg-[#a5e7884f]'>
      <div className='flex flex-col justify-center items-start lg:w-1/2 p-10'>
        <h1 className='text-3xl md:text-4xl my-3 w-full  font-bold max-w-[15ch] mb-5'>
          Study online with Greenwich Central College
        </h1>
        <p className='max-w-[45ch] leading-6 opacity-90'>
          Greenwich Central College is one of the world’s leading distance
          education providers. We work with our highly respected education
          partners to provide quality home study courses including A-Levels and
          Accredited Diplomas worldwide
        </p>
        <Button size='lg' className='rounded-2xl my-5' asChild>
          <Link href={routes.about}>Read More</Link>
        </Button>
      </div>
      <div className='lg:w-1/2 w-full relative min-h-[400px]'>
        <Image
          src={sideImg}
          alt=''
          className='w-full object-cover rounded-2xl'
          fill
        />
      </div>
    </div>
  );
}
