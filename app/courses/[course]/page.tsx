import React from 'react';
import { courseInfo } from '@/lib/courseInfo';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactDetails, routes } from '@/lib/constants';
import { FooterSection } from '@/components/layout/sections/footer';
import { ContactSection } from '@/components/layout/sections/contact';
import PurchaseSection from './purchase-section';
import Link from 'next/link';
import BookingSection from './booking-section';
import GetCallback from '@/components/layout/sections/get-callback';
import Image from 'next/image';
import { getRandomImage } from '@/lib/utils';

export default function Page({
  params,
  searchParams,
}: {
  params: { course: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const courseID = params.course;
  const currentCourseInfo = courseInfo.find(
    (value) => value.courseUniqueId === courseID
  );
  if (!courseID || !currentCourseInfo) {
    console.log(params);
    return <h1>{params.course}</h1>;
  }
  return (
    <>
      <section className='container flex flex-wrap gap-10 py-12'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={routes.courses}>Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/courses?cat=${currentCourseInfo.category}`}
              >
                {currentCourseInfo.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentCourseInfo.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='w-full rounded-2xl p-14 bg-primary'>
          <h1 className='text-4xl md:text-5xl font-bold text-white'>
            {currentCourseInfo.title}
          </h1>
        </div>
        <div className='w-full lg:w-3/5 pb-12 col-span-2 shadow-lg border border-muted p-5 rounded-lg'>
          <figure className='relative w-full h-[350px] mb-10 rounded-xl'>
            <Image
              src={
                currentCourseInfo.imageUrl === ''
                  ? getRandomImage()
                  : currentCourseInfo.imageUrl
              }
              alt=''
              className='w-full object-cover rounded-xl'
              fill
            />
          </figure>
          <h1 className='text-2xl md:text-5xl my-2 font-extrabold '>
            {currentCourseInfo.title}
          </h1>
          <h2 className='text-2xl text-muted-foreground md:text-xl font-bold'>
            {currentCourseInfo.subTitle}
          </h2>
          <div className='py-10 text-foreground'>
            <p className='py-5'>{currentCourseInfo.caption}</p>
            <ul className='list-disc ml-8'>
              {currentCourseInfo.suitedFor.map((item, index) => (
                <li className='my-2' key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className='pt-5'>
              If you work in any of the following job roles, this course would
              be perfect for you:
            </p>
            <ul className='list-disc ml-8'>
              {currentCourseInfo.forYouIf.map((item, index) => (
                <li className='my-2' key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <p className='py-4'>
              This qualification covers a range of skills and knowledge relating
              to Leadership & Management of Adult Care services based on English
              legislation.
            </p>
            <h3 className='font-semibold text-lg mt-5 text-foreground opacity-75'>
              Diploma Course Structure
            </h3>
            <hr className='my-2 border-2' />
            <br />
            <p className='mb-2'>{currentCourseInfo.courseStructure}</p>
            <h3 className='font-semibold text-lg mt-5 mb-3 text-foreground opacity-75'>
              Optional Units
            </h3>
            <hr className='my-2 border-2' />

            <h3 className='font-semibold text-lg mt-5 mb-3 text-foreground opacity-75'>
              Pricing
            </h3>
            <hr className='my-2 border-2' />
            <p>{currentCourseInfo.pricing}</p>
            <h3 className='font-semibold text-lg mt-5 mb-3 text-foreground opacity-75'>
              Assesment
            </h3>
            <hr className='my-2 border-2' />
            <p>{currentCourseInfo.assesment}</p>
            <h3 className='font-semibold text-lg mt-5 mb-3 text-foreground opacity-75'>
              Entry Requirements
            </h3>
            <hr className='my-2 border-2' />
            <p>{currentCourseInfo.entryRequirements}</p>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/5 w-full gap-5  col-span-1'>
          <div className='sticky top-0 lg:py-24'>
            <Card
              className={
                ' drop-shadow-xl w-[350px] h-fit shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary'
              }
            >
              <CardHeader>
                <CardTitle className='pb-2'>
                  {currentCourseInfo.title}
                </CardTitle>

                <CardDescription className='pb-4'>
                  {currentCourseInfo.subTitle}
                </CardDescription>

                <div>
                  <span className='text-3xl font-bold'>
                    £{currentCourseInfo.priceInCurrency}
                  </span>
                  <span className='text-muted-foreground'>
                    {' '}
                    +VAT applicable
                  </span>
                </div>
              </CardHeader>

              <CardContent className='flex'>
                <div className='space-y-4'>
                  {currentCourseInfo.suitedFor.map((benefit) => (
                    <span key={benefit} className='flex'>
                      <Check className='text-primary mr-2' />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className='flex flex-col gap-2'>
                {/* <Button className='w-full' asChild>
                <Link href={routes.checkout}>Purchase Now</Link>
              </Button> */}
                {currentCourseInfo.booking ? (
                  <BookingSection id={currentCourseInfo.courseUniqueId} />
                ) : (
                  <PurchaseSection
                    id={currentCourseInfo.courseUniqueId}
                    price={currentCourseInfo.priceInCurrency}
                    title={currentCourseInfo.title}
                  />
                )}
              </CardFooter>
            </Card>
            <div className='drop-shadow-xl rounded-lg my-8 py-5 w-[300px] h-fit flex flex-col justify-center items-center shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary'>
              <h3 className='text-lg opacity-70 '>Talk to Us</h3>
              <h2 className='text-xl'> About This Course</h2>
              <h2 className='text-lg'> {contactDetails.phoneNumber}</h2>
            </div>
          </div>
        </div>
      </section>
      <GetCallback subject={`Callback - ${currentCourseInfo.title}`} />
      <ContactSection />
    </>
  );
}
