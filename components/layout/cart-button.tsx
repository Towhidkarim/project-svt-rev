'use client';
import { useCartContext } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { CircleX, ShoppingCart } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import { routes } from '@/lib/constants';

export default function CartButton({ className }: { className?: string }) {
  const { cartItems, removeFromCart, clearCart } = useCartContext();
  return (
    <div className={cn('', className)}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon' className='relative'>
            <Badge
              variant='destructive'
              className='absolute -bottom-2 right-1 text-xs p-px'
            >
              {cartItems.length}
            </Badge>
            <ShoppingCart size={24} className='mx-4' />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Your Cart</DrawerTitle>
            <DrawerDescription>Courses Added to the cart</DrawerDescription>
            <div className='flex flex-col gap-2 my-5'>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className='flex border-b p-2 border-muted flex-row justify-between'
                >
                  <span>{item.name}</span>
                  <div className='flex gap-3 justify-center items-center'>
                    <span>${item.price}</span>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <CircleX />
                    </Button>
                  </div>
                </div>
              ))}
              <div className='flex p-2 flex-row justify-between font-semibold'>
                <span>Total:</span>
                <span className=''>
                  ${cartItems.reduce((prev, curr) => prev + curr.price, 0)}
                </span>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <Button asChild>
              <Link href={routes.checkout}>Checkout</Link>
            </Button>
            <Button variant='destructive' onClick={() => clearCart()}>
              Clear Cart
            </Button>
            <DrawerClose>
              <Button variant='outline' className='w-full'>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
