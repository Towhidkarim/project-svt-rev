'use client';
import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import PaymentComplete from '../payment-complete';
import { useCartContext } from '@/lib/cart-context';
import { SendPurchaseInfoAction } from '@/lib/actions';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default function CheckoutSection({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems } = useCartContext();
  let courseNamesConcatenated = '';
  cartItems.forEach((value) => (courseNamesConcatenated += value.name + ', '));
  const [paymentSuccesful, setPaymentSuccesful] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    courseName: courseNamesConcatenated,
  });

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      setPaymentSuccesful(true);
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
      const res = await SendPurchaseInfoAction({
        email: userInfo.email,
        firstName: userInfo.firstName,
        courseName: userInfo.courseName,
        lastName: userInfo.lastName,
      });
      if (res.ok) setPaymentSuccesful(true);
      else toast('Something Went Wrong');
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className='flex items-center justify-center'>
        <div
          className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-2 rounded-md'>
      <PaymentComplete open={paymentSuccesful} />
      <div className='w-full flex flex-col gap-4 my-4'>
        <Label>
          First Name
          <Input
            type='text'
            min={2}
            max={55}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, firstName: e.target.value }))
            }
            required
          />
        </Label>
        <Label>
          Last Name
          <Input
            type='text'
            min={2}
            max={55}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, lastName: e.target.value }))
            }
            required
          />
        </Label>
        <Label>
          Email
          <Input
            type='email'
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </Label>
      </div>
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className='text-primary-foreground w-full p-5 bg-primary mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'
      >
        {!loading ? `Pay $${amount}` : 'Processing...'}
      </button>
    </form>
  );
}
