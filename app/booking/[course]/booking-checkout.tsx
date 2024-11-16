'use client';
import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SendBookingInfoAction } from '@/lib/actions';
import { toast } from 'sonner';

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default function BookingCheckout({
  courseName,
  amount,
}: {
  courseName: string;
  amount: number;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    courseDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    courseName,
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
    const location = window.location.hostname;
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required',
      confirmParams: {
        return_url: `https://${location}/payment-success?amount=${amount}`,
      },
    });
    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
      toast('Something Went Wrong');
    } else {
      const res = await SendBookingInfoAction({
        email: userInfo.email,
        courseDate: format(userInfo.courseDate, 'PPP'),
        firstName: userInfo.firstName,
        courseName: userInfo.courseName,
        lastName: userInfo.lastName,
      });
      if (res.ok)
        toast('Your Exam have been booked, you will be contacted shortly');
      else console.log(res.message);
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
        <Label className='flex flex-col gap-4'>
          Your preferred date of exam
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[240px] justify-start text-left font-normal',
                  !userInfo.courseDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon />
                {userInfo.courseDate ? (
                  format(userInfo.courseDate, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                required
                mode='single'
                selected={userInfo.courseDate}
                disabled={{ before: new Date() }}
                onSelect={(e) =>
                  setUserInfo((prev) => ({
                    ...prev,
                    courseDate: e ?? prev.courseDate,
                  }))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </Label>
      </div>
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className='text-primary-foreground w-full p-5 bg-primary mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'
      >
        {!loading ? `Book Exam (Pay $${amount})` : 'Processing...'}
      </button>
    </form>
  );
}
