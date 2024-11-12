import { whatsappPhoneNumber } from '@/lib/constants';
import whatsappImage from '@/public/WhatsAppButtonGreenSmall.svg';
import whatsappLogo from '@/public/whatsapp-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ChatButton() {
  return (
    <div className='fixed right-6 bottom-6'>
      <Link
        href={`https://wa.me/${whatsappPhoneNumber}?text='Hello there'`}
        target='_blank'
      >
        <Image
          src={whatsappLogo}
          alt='WhatsAppChat'
          className='size-14 md:size-16 hover:shadow-2xl transition rounded-full cursor-pointer hover:ring-1'
        />
      </Link>
    </div>
  );
}
