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
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactDetails } from '@/lib/constants';
import { FooterSection } from '@/components/layout/sections/footer';
import { ContactSection } from '@/components/layout/sections/contact';

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
      <div className='container flex md:flex-row flex-col gap-10 py-24 sm:py-12'>
        <div className='w-full md:w-3/5 py-12 shadow-lg border border-muted p-5 rounded-lg'>
          <h1 className='text-2xl md:text-3xl font-semibold '>
            {currentCourseInfo.title}
          </h1>
          <h2 className='text-2xl text-muted-foreground md:text-xl font-semibold'>
            {currentCourseInfo.subTitle}
          </h2>
          <div className='py-10 text-muted-foreground font-light'>
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
              Mandatory Units
            </h3>
            <hr className='my-2 border-2' />

            <div>
              {currentCourseInfo.mandatoryUnits.map((item, index) => (
                <div key={index} className='flex gap-10 my-5 flex-row'>
                  <span>{item.code}</span>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
            <h3 className='font-semibold text-lg mt-5 mb-3 text-foreground opacity-75'>
              Optional Units
            </h3>
            <hr className='my-2 border-2' />

            <div>
              {currentCourseInfo.optionalUnits.map((item, index) => (
                <div key={index} className='flex gap-10 my-5 flex-row'>
                  <span>{item.code}</span>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
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
        <div className='flex flex-col md:w-1/5 w-full gap-5 py-12'>
          <Card
            className={
              'sticky drop-shadow-xl w-[350px] h-fit shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary'
            }
          >
            <CardHeader>
              <CardTitle className='pb-2'>{currentCourseInfo.title}</CardTitle>

              <CardDescription className='pb-4'>
                {currentCourseInfo.subTitle}
              </CardDescription>

              <div>
                <span className='text-3xl font-bold'>
                  ${currentCourseInfo.priceInCurrency}
                </span>
                <span className='text-muted-foreground'> +VAT applicable</span>
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

            <CardFooter>
              <Button className='w-full'>Purchase Now</Button>
            </CardFooter>
          </Card>
          <div className='drop-shadow-xl rounded-lg my-8 py-5 w-[300px] h-fit flex flex-col justify-center items-center shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary'>
            <h3 className='text-lg opacity-70 '>Talk to Us</h3>
            <h2 className='text-xl'> About This Course</h2>
            <h2 className='text-lg'> {contactDetails.phoneNumber}</h2>
          </div>
        </div>
      </div>
      <ContactSection />
      <FooterSection />
    </>
  );
}
