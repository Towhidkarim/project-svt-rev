import { Button } from '@/components/ui/button';
import { routes } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

export default function GetCallback({ subject }: { subject: string }) {
  return (
    <div className='container mx-auto px-20 border-muted border rounded-xl mt-14 py-10 flex flex-col lg:flex-row justify-center md:justify-between items-center gap-8 bg-[#a5e7884f]'>
      <div className='lg:w-1/3'>
        <h1 className=' text-3xl md:text-4xl font-bold my-3'>
          Let us call you
        </h1>
        <h4 className='leading-6 text-opacity-80'>
          If you have any questions, please click the ‘Request call’ button,
          fill in your details on the next page and we will give you a call
          back.
        </h4>
      </div>
      <Button size='lg' className='font-bold text-lg'>
        <Link href={`${routes.contact}?sub=${subject}`}>
          Request a Callback
        </Link>
      </Button>
    </div>
  );
}
