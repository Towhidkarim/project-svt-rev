'use client';
import CheckoutSection from '@/components/layout/sections/checkout-section';
import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';
import { courseInfo } from '@/lib/courseInfo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default function PaymentForm() {
  //   const params = useSearchParams();
  const { cartItems, addToCart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const amount = cartItems.reduce((prev, curr) => prev + curr.price, 0);
  //   const courseID = params.get('courseId');
  //   let courseData: { id: string; name: string; price: number } | undefined =
  //     undefined;
  //   const matchedCourse = courseInfo.filter(
  //     (value) => value.courseUniqueId === courseID
  //   )[0];

  //   useEffect(() => {
  //     if (courseID && matchedCourse) {
  //       let courseData = {
  //         id: matchedCourse.courseUniqueId,
  //         name: matchedCourse.title,
  //         price: matchedCourse.priceInCurrency,
  //       };
  //       addToCart(courseData);
  //       setTotalPrice(cartItems.reduce((prev, curr) => prev + curr.price, 0));
  //     }
  //   }, [cartItems, matchedCourse]);
  if (cartItems.length === 0)
    return (
      <section className='mx-auto p-10 text-primary rounded-md '>
        <h1 className='text-lg text-muted-foreground'>
          No Items found in Cart
        </h1>
      </section>
    );
  return (
    <section className=' mx-auto p-10 text-primary rounded-md '>
      <div className='w-full px-3 border rounded-lg'>
        <div className='flex flex-col gap-2 my-5'>
          <div className='flex flex-col gap-2 my-5'>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='flex border-b p-2 border-muted flex-row justify-between'
              >
                <span>{item.name}</span>
                <div className='flex gap-3 justify-center items-center'>
                  <span>${item.price}</span>
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
        </div>
      </div>
      <br />
      <div className='mb-10 text-center'>
        <h1 className='text-4xl font-extrabold mb-2'>Course Payment</h1>
        <h2 className='text-2xl'>
          of amount
          <span className='font-bold'> ${amount}</span>
        </h2>
      </div>
      <div className='max-w-6xl'>
        {amount > 0 ? (
          <Elements
            stripe={stripePromise}
            options={{
              mode: 'payment',
              amount: convertToSubcurrency(amount),
              currency: 'usd',
            }}
          >
            <CheckoutSection amount={amount} />
          </Elements>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
