import { Button } from '@/components/ui/button';
import { routes } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

export default function GetCallback({ subject }: { subject: string }) {
  return (
    <div className='container mx-auto border-muted border rounded-xl mt-14 py-10 flex flex-col justify-center items-center gap-8'>
      <p className='max-w-[65ch] text-center opacity-85 text-lg'>
        Have any specefic query? or want to get a callback? If so, request a
        callback and we will get back to you as soon as possible{' '}
      </p>
      <Button>
        <Link href={`${routes.contact}?sub=${subject}`}>
          Request a Callback
        </Link>
      </Button>
    </div>
  );
}
