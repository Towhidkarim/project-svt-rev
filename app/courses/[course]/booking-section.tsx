'use client';

import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';
import { routes } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BookingSection({ id }: { id: string }) {
  return (
    <div className='w-full'>
      <h1 className='text-center my-3 font-semibold'>Written + Speaking</h1>
      <Button className='w-full my-4' asChild>
        <Link href={`/booking/${id}`}>Book Exam Now</Link>
      </Button>
      {/* <Button
        variant='outline'
        className='w-full'
        onClick={() => addToCart({ id, name: title, price })}
      >
        Add to Cart
      </Button> */}
    </div>
  );
}
