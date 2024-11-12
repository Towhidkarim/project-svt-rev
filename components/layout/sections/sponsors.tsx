'use client';

import { Icon } from '@/components/ui/icon';
import { courseInfo } from '@/lib/courseInfo';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import { icons } from 'lucide-react';
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: 'Crown',
    name: 'Atlas Knowledge Partners',
  },
  {
    icon: 'Vegan',
    name: 'Crestwell Innovations',
  },
  {
    icon: 'Ghost',
    name: 'Novus Learning Solutions',
  },
  {
    icon: 'Puzzle',
    name: 'Apex Scholar Fund',
  },
  {
    icon: 'Squirrel',
    name: 'Pinnacle Education Trust',
  },
  {
    icon: 'Cookie',
    name: 'BrightPath Foundations',
  },
  {
    icon: 'Drama',
    name: 'Legacy Futures Group',
  },
];

export const SponsorsSection = () => {
  return (
    <section id='sponsors' className='max-w-[75%] mx-auto pb-24 sm:pb-32'>
      <h2 className='text-lg md:text-xl text-center mb-6'>Courses We Offer</h2>

      <div className='mx-auto'>
        <Marquee
          className='gap-[3rem]'
          fade
          innerClassName='gap-[3rem]'
          pauseOnHover
        >
          {courseInfo.map((item, index) => (
            <div
              key={index}
              className='flex items-center text-xl md:text-2xl font-medium'
            >
              {item.title}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
