import { Separator } from '@/components/ui/separator';
import {
  ChevronsDownIcon,
  Facebook,
  Instagram,
  Phone,
  Send,
  SendIcon,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/public/gwc-logo.png';
import Link from 'next/link';
import waImage from '@/public/whatsapp-logo.svg';
import {
  contactDetails,
  footerOptions,
  routes,
  whatsappPhoneNumber,
} from '@/lib/constants';

export const FooterSection = () => {
  return (
    <footer id='footer' className='container py-24 sm:py-32'>
      <div className='dark p-10 bg-card/95 border border-secondary text-white rounded-2xl'>
        <div className='flex flex-row flex-wrap justify-between gap-x-12 gap-y-8'>
          <div className='dark col-span-3 xl:col-span-2'>
            <Link href='#' className='flex font-bold items-center'>
              <Image
                className='rounded-lg w-32 h-auto mr-auto  text-white'
                src={logoImage}
                alt='logo'
              />

              {/* <h3 className='text-2xl'>Greenwich Central College</h3> */}
            </Link>
          </div>

          <div className='flex flex-col gap-2 col-span-3'>
            <h3 className='font-bold text-lg'>Contact</h3>
            {/* <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Github
              </Link>
            </div> */}

            <div>
              <Link
                href={`mailto:${contactDetails.mail}`}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3'>
                  <SendIcon />
                  {contactDetails.mail}
                </div>
              </Link>
            </div>

            <div>
              <Link
                href={`tel:${contactDetails.phoneNumber}`}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3'>
                  <Phone />
                  {contactDetails.phoneNumber}
                </div>
              </Link>
            </div>
            <div>
              <Link
                href={`https://wa.me/${whatsappPhoneNumber}`}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3 items-center'>
                  <Image src={waImage} alt='' className='size-8' />
                  WhatsApp
                </div>
              </Link>
            </div>
            {/* <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Facebook
              </Link>
            </div> */}
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-lg'>Help</h3>
            <div>
              <Link
                href={routes.contact}
                className='dark opacity-60 hover:opacity-100'
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link
                href={routes.faq}
                className='dark opacity-60 hover:opacity-100'
              >
                FAQ
              </Link>
            </div>

            <div>
              <Link
                href={routes.contact}
                className='dark opacity-60 hover:opacity-100'
              >
                Feedback
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2 '>
            <h3 className='font-bold text-lg'>Socials</h3>
            <div>
              <Link
                href={footerOptions.facebook}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3 items-center'>
                  <Facebook />
                  Facebook
                </div>
              </Link>
            </div>

            <div>
              <Link
                href={footerOptions.insta}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3 items-center'>
                  <Instagram />
                  Instagram
                </div>
              </Link>
            </div>
            <div>
              <Link
                href={footerOptions.twitter}
                className='dark opacity-60 hover:opacity-100'
              >
                <div className='flex flex-row gap-3 items-center'>
                  <Twitter />
                  Twitter
                </div>
              </Link>
            </div>
          </div>
          <div className=' flex-col gap-2 hidden md:flex'>
            {/* <h3 className='font-bold text-lg'>Location</h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39739.96691142761!2d-0.016456!3d51.499493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be81b1f8c3%3A0x769e2746aa41259!2sBellerive%20Suites!5e0!3m2!1sen!2sbd!4v1731441280994!5m2!1sen!2sbd'
              width='300'
              height='225'
              className='border-none mx-auto hidden md:block'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe> */}
          </div>
        </div>
        <br />
        <div className=' flex-col gap-2 flex md:hidden '>
          {/* <h3 className='font-bold text-lg'></h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39739.96691142761!2d-0.016456!3d51.499493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be81b1f8c3%3A0x769e2746aa41259!2sBellerive%20Suites!5e0!3m2!1sen!2sbd!4v1731441280994!5m2!1sen!2sbd'
            width='250'
            height='200'
            className='border-none mx-auto md:hidden'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe> */}
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
