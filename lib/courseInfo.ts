export const courseCategories = [
  'LEVEL-3 Diploma',
  'English Language Courses',
  'Construction Course',
  'Security Courses',
  'SERU Course',
] as const;

export type TCourseInfoType = {
  category: (typeof courseCategories)[number];
  courseUniqueId: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  caption: string;
  courseDetails: string;
  suitedFor: string[];
  forYouIf: string[];
  booking: boolean;
  covers: string;
  courseStructure: string;
  pricing: string;
  priceInCurrency: number;
  assesment: string;
  duration: string;
  entryRequirements: string;
  why: string;
};

import courseDataJson from '@/lib/course_data.json';
// const validData =

export const courseInfo: TCourseInfoType[] = JSON.parse(
  JSON.stringify(courseDataJson)
);
