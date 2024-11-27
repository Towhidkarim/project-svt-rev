import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomImage() {
  const imageList = [
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(1).jpg',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(1).webp',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(2).jpg',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(2).webp',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(2).webp',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/courseimg/course_img%20(3).jpg',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/diplomaBBA.png',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/diplomaBBAskills.png',
    'https://raw.githubusercontent.com/Towhidkarim/project-svt-rev/refs/heads/main/public/img1.png',
  ];
  return imageList[Math.round(Math.random() * (imageList.length - 1))];
}
