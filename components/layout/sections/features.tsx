import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import atheImg from '@/public/awards/athe.png';
import langcertImg from '@/public/awards/langcert.webp';
import biiab from '@/public/awards/biiab.jpeg';
import proqImg from '@/public/awards/proqual.jpeg';
// import btecImg from '@/public/awards/btec.png';
// import cimaImg from '@/public/awards/cima.png';
// import iapImg from '@/public/awards/iap.png';
// import peopleCertImg from '@/public/awards/peope_cert.png';
// import tqukImg from '@/public/awards/tq-uk.jpg';
import Image from 'next/image';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList = [
  {
    icon: atheImg,
    title: '',
    description: '',
  },
  {
    icon: langcertImg,
    title: '',
    description: '',
  },
  {
    icon: biiab,
    title: '',
    description: '',
  },
  {
    icon: proqImg,
    title: '',
    description: '',
  },
  // {
  //   icon: btecImg,
  //   title: 'Pearson BTEC',
  //   description:
  //     'Royal Charter gave the University of London limited powers to conduct exams and confer degrees',
  // },
  // {
  //   icon: cimaImg,
  //   title: 'CIMA',
  //   description:
  //     'CIMA (Chartered Institute of Management Accountants) is a leading awarding body in the world',
  // },
  // {
  //   icon: iapImg,
  //   title: 'IAP',
  //   description:
  //     'The International Awards for Professionals iAP, is an awarding body who aim to promote high education',
  // },
  // {
  //   icon: peopleCertImg,
  //   title: 'PeopleCert',
  //   description:
  //     'PeopleCert delivers world-class certification programmes on behalf of a wide range of organisations.',
  // },
  // {
  //   icon: tqukImg,
  //   title: 'TK UK',
  //   description: 'Training Qualifications UK (TQUK) is recognised by Ofqual',
  // },
];

export const FeaturesSection = () => {
  return (
    <section id='features' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Features
      </h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Awarding Body
      </h2>

      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
        We stand out by combining industry expertise with personalized support,
        ensuring learners receive the guidance and resources they need to
        succeed in their chosen fields.
      </h3>

      <div className='grid grid-cols-1 px-20 md:grid-cols-2 max-w-[100svw] lg:max-w-[60svw] mx-auto'>
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className='h-full bg-background border-0 shadow-none m-0'>
              <CardHeader className='flex justify-center items-center'>
                <div className='bg-primary/20 p-2 w-full rounded-xl ring-8 ring-primary/10 dark:bg-slate-50/55'>
                  <Image
                    src={icon}
                    alt={title}
                    className='w-[212px] h-[113px] object-contain mx-auto'
                  />
                </div>

                <CardTitle className=''>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground text-center'>
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
