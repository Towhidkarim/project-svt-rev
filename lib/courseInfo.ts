export const courseCategories = [
  'Security Courses',
  'Language Courses',
  'Health and Social Care',
  'Business Course',
  'SERU Course',
  'Construction Course',
  'Vocational Courses',
] as const;

type TCourseInfoType = {
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
