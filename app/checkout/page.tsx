import React from 'react';
import PaymentForm from './payment-form';

export default function Page() {
  return (
    <section className='container md:w-[700px] py-16 sm:py-20'>
      <h1 className='text-center text-3xl my-2 font-semibold'>Checkout</h1>
      <PaymentForm />
    </section>
  );
}
