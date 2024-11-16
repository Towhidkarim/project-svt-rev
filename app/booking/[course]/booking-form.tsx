'use client';
import { Button } from '@/components/ui/button';
import { useCartContext } from '@/lib/cart-context';
import { courseInfo } from '@/lib/courseInfo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BookingCheckout from './booking-checkout';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default function BookingForm({
  courseName,
  amount,
}: {
  courseName: string;
  amount: number;
}) {
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubcurrency(amount),
          currency: 'usd',
        }}
      >
        {/* <CheckoutSection amount={amount} /> */}
        <BookingCheckout amount={amount} courseName={courseName} />
      </Elements>
    </div>
  );
}
