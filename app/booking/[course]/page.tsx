import { courseInfo } from '@/lib/courseInfo';
import React from 'react';
import BookingForm from './booking-form';

export default function Page({ params }: { params: { course: string } }) {
  const courseID = params.course;
  const course = courseInfo.find(
    (item, index) => item.courseUniqueId === courseID
  );
  if (course === undefined)
    return (
      <h1 className='text-center text-4xl my-2 py-20 font-semibold'>
        Invalid Course
      </h1>
    );
  return (
    <section className='container md:w-[700px] py-16 sm:py-20'>
      <h1 className='text-center text-3xl my-2 font-semibold'>
        Book Exam for <span className='font-bold'>{course.title}</span>
      </h1>
      {/* <PaymentForm /> */}
      <BookingForm amount={course.priceInCurrency} courseName={course.title} />
    </section>
  );
}
