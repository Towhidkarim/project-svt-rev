import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomImage() {
  const imageList = [
    '/courseimg/course_img (1).jpg',
    '/courseimg/course_img (1).webp',
    '/courseimg/course_img (2).jpg',
    '/courseimg/course_img (2).webp',
    '/courseimg/course_img (3).jpg',
    '/courseimg/course_img (3).webp',
    '/diplomaBBA.png',
    '/diplomaBBAskills.png',
    '/img1.png',
  ];
  return imageList[Math.round(Math.random() * (imageList.length - 1))];
}
