'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '../ui/button';
import { CircleCheckBig } from 'lucide-react';
import Link from 'next/link';

export default function PaymentComplete({ open = false }: { open: boolean }) {
  return (
    <AlertDialog open={open}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-center'>Success!</AlertDialogTitle>
          <AlertDialogDescription className='flex flex-col justify-center items-center gap-4'>
            <CircleCheckBig className='text-primary' size={42} />
            <h2 className='text-center text-lg'>Payment Succesful!</h2>
            <h4>You Will be Contacted Back Shortly</h4>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction> */}
          <Button className='w-full' asChild>
            <Link href='/'>Back to Home</Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
