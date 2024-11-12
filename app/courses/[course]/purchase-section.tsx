'use client';

import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';

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
  return (
    <div className='w-full'>
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
