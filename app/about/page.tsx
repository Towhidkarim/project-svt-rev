import { aboutInfo, contactDetails } from '@/lib/constants';
import { Building2, Clock, Mail, Phone } from 'lucide-react';

export default function page() {
  return (
    <main className='w-full'>
      <section className='container mx-auto py-20 flex flex-row flex-wrap justify-between items-start gap-10'>
        <div className='flex flex-col '>
          <h1 className='text-4xl my-4 font-bold text-primary'>About Us</h1>
          <p className='max-w-prose text-base leading-7 '>
            {aboutInfo.aboutText}
          </p>
          <br />
          <h1 className='text-4xl my-4 font-bold text-primary'>
            About Distant Learning
          </h1>
          <p className='max-w-prose text-base leading-7 '>
            {aboutInfo.secondaryText}
          </p>
          <br />
          <h1 className='text-4xl my-4 font-bold text-primary'>
            Tutor Support
          </h1>
          <p className='max-w-prose text-base leading-7 '>
            {aboutInfo.tertiaryText}
          </p>
          <h1 className='text-4xl my-4 font-bold text-primary'>Contact Us</h1>
          <p className='max-w-prose text-base leading-7 '>
            {aboutInfo.contactText}
          </p>
        </div>
        <div className=''>
          <div>
            <div className='mb-4'>
              <h2 className='text-lg text-primary mb-2 tracking-wider'>
                Contact
              </h2>

              <h2 className='text-3xl md:text-4xl font-bold'>
                Connect With Us
              </h2>
            </div>
            <p className='mb-8 text-muted-foreground lg:w-5/6'>
              Contact us for any queries you may have, we will reach out as soon
              as we can
            </p>

            <div className='flex flex-col gap-4'>
              <div>
                <div className='flex gap-2 mb-1'>
                  <Building2 />
                  <div className='font-bold'>Find us</div>
                </div>

                <div>{contactDetails.address}</div>
              </div>

              <div>
                <div className='flex gap-2 mb-1'>
                  <Phone />
                  <div className='font-bold'>Call us</div>
                </div>

                <div>{contactDetails.phoneNumber}</div>
              </div>

              <div>
                <div className='flex gap-2 mb-1'>
                  <Mail />
                  <div className='font-bold'>Mail US</div>
                </div>

                <div>{contactDetails.mail}</div>
              </div>

              <div>
                <div className='flex gap-2'>
                  <Clock />
                  <div className='font-bold'>Visit us</div>
                </div>

                <div>
                  <div>Monday - Friday</div>
                  <div>8AM - 4PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
