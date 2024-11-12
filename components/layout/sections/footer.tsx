import { Separator } from '@/components/ui/separator';
import { ChevronsDownIcon } from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/public/gwc-logo.png';
import Link from 'next/link';
import { routes } from '@/lib/constants';

export const FooterSection = () => {
  return (
    <footer id='footer' className='container py-24 sm:py-32'>
      <div className='p-10 bg-card border border-secondary rounded-2xl'>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
          <div className='col-span-2 xl:col-span-1'>
            <Link href='#' className='flex font-bold items-center'>
              <Image
                className='rounded-lg w-14 h-auto mr-2  text-white'
                src={logoImage}
                alt='logo'
              />

              <h3 className='text-2xl'>Greenwich Central College</h3>
            </Link>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Contact</h3>
            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Github
              </Link>
            </div>

            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Twitter
              </Link>
            </div>

            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Instagram
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Help</h3>
            <div>
              <Link
                href={routes.contact}
                className='opacity-60 hover:opacity-100'
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link href={routes.faq} className='opacity-60 hover:opacity-100'>
                FAQ
              </Link>
            </div>

            <div>
              <Link
                href={routes.contact}
                className='opacity-60 hover:opacity-100'
              >
                Feedback
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Socials</h3>
            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Twitch
              </Link>
            </div>

            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Dribbble
              </Link>
            </div>
          </div>
          <div className=' flex-col gap-2 hidden md:flex'>
            <h3 className='font-bold text-lg'>Location</h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39739.96691142761!2d-0.016456!3d51.499493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be81b1f8c3%3A0x769e2746aa41259!2sBellerive%20Suites!5e0!3m2!1sen!2sbd!4v1731441280994!5m2!1sen!2sbd'
              width='300'
              height='225'
              className='border-none mx-auto hidden md:block'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
        <br />
        <div className=' flex-col gap-2 flex md:hidden '>
          <h3 className='font-bold text-lg'></h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39739.96691142761!2d-0.016456!3d51.499493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be81b1f8c3%3A0x769e2746aa41259!2sBellerive%20Suites!5e0!3m2!1sen!2sbd!4v1731441280994!5m2!1sen!2sbd'
            width='250'
            height='200'
            className='border-none mx-auto md:hidden'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <Separator className='my-6' />
        <section className=''>
          <h3 className=''>
            &copy; 2024 All Rights are Reserved
            <Link
              target='_blank'
              href='/'
              className='text-primary transition-all border-primary hover:border-b-2 ml-1'
            >
              Greenwich Central College
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
