'use client';

import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';
import { routes } from '@/lib/constants';
import { useRouter } from 'next/navigation';

export default function PurchaseSection({
  id,
  title,
  price,
}: {
  id: string;
  title: string;
  price: number;
}) {
  const { addToCart } = useCartContext();
  const router = useRouter();
  return (
    <div className='w-full'>
      <Button
        onClick={() => {
          addToCart({ id, name: title, price });
          router.push(routes.checkout);
        }}
        className='w-full my-4'
      >
        Purchase Now
      </Button>
      <Button
        variant='outline'
        className='w-full'
        onClick={() => addToCart({ id, name: title, price })}
      >
        Add to Cart
      </Button>
    </div>
  );
}
