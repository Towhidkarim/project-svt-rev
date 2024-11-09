export const courseCategories = [
  'catone',
  'cattwo',
  'catthree',
  'catfour',
] as const;

type TCourseInfoType = {
  category: (typeof courseCategories)[number];
  courseUniqueId: string;
  title: string;
  subTitle: string;
  caption: string;
  suitedFor: string[];
  forYouIf: string[];
  covers: string;
  courseStructure: string;
  mandatoryUnits: {
    code: string;
    desc: string;
  }[];
  optionalUnits: {
    code: string;
    desc: string;
  }[];
  pricing: string;
  priceInCurrency: number;
  assesment: string;
  duration: string;
  entryRequirements: string;
  why: string;
};

export const courseInfo: TCourseInfoType[] = [
  {
    category: 'catone',
    courseUniqueId: '1',
    title: 'Course Title',
    subTitle: 'Sub Title',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque tortor',
    suitedFor: ['People 1', 'People 2', 'People 3'],
    forYouIf: ['People 1', 'People 2', 'People 3'],
    covers: 'Covers certain aspect',
    courseStructure:
      'efficitur mattis lectus a tincidunt. Donec pellentesque volutpat orci sed tincidunt. Sed eu enim consectetur, convallis enim eu, scelerisque nisl. Nunc vulputate nec augue in rhoncus. Proin finibus bibendum',
    mandatoryUnits: [
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
    ],
    optionalUnits: [
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        code: 'F0021/2',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
      },
    ],
    pricing: 'pricing info',
    priceInCurrency: 100,
    assesment:
      'Nullam sed odio sed enim aliquet tempus non eget sapien. Aliquam vel ultrices ligula, non vestibulum purus. Duis suscipit velit eu diam faucibus semper. Quisque placerat vitae ',
    duration: 'Duration specefic Info',
    entryRequirements: 'Requirements info',
    why: 'WHy shoud you take it',
  },
];
