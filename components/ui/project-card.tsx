import { Button } from '@/components/ui/button';
import { categories } from '@/lib/constants';
import { courseCategories, courseInfo } from '@/lib/courseInfo';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getRandomImage } from '@/lib/utils';

export default function ProjectCard({
  title,
  imageUrl,
  priceInCurrency,
  subTitle,
  caption,
  courseDetails,
  courseUniqueId,
}: (typeof courseInfo)[0]) {
  return (
    <Card className='rounded-lg border min-h-[500px] shadow-lg hover:scale-[102%] duration-300 transition max-w-[375px] flex flex-col justify-between w-full'>
      <CardHeader className=' h-[350px] px-0  mx-0 pt-0 relative'>
        <figure className='relative h-[300px]  w-full'>
          <Image
            src={imageUrl !== '' ? imageUrl : getRandomImage()}
            alt={title}
            loading='lazy'
            className='object-cover rounded-t-lg'
            fill
          />
        </figure>
        <div className='mx-4 mt-4'>
          <div className='px-2 border border-l-0 py-3 rounded-r-lg text-lg absolute top-3 left-0 text-primary-foreground bg-primary font-bold grid place-items-center'>
            £{priceInCurrency}
          </div>
          <CardTitle className='flex flex-row justify-between my-3'>
            <span className='text-xl font-bold pr-3'>{title}</span>
            <div className='text-xl flex flex-col '>
              <span className='text-sm text-muted-foreground text-right'>
                {/* From */}
              </span>
              {/* <span>£{priceInCurrency}</span> */}
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col h-[100px] items-center justify-center p-6 -my-2'>
        <CardDescription className='text-base -translate-y-5'>
          {subTitle !== ''
            ? subTitle.substring(0, 128)
            : caption !== ''
            ? caption
            : courseDetails.substring(0, 128)}
          ...
        </CardDescription>
      </CardContent>
      <CardFooter className='w-full'>
        <div className='w-full  border-t pt-4'>
          <Button asChild>
            <Link href={`courses/${courseUniqueId}`}>Learn More</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
