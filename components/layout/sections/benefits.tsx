import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { routes } from '@/lib/constants';
import Link from 'next/link';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'Blocks',
    title: 'Language Courses',
    description:
      'Master communication with effective grammar, fluency, and cultural insights for global connections.',
  },
  {
    icon: 'LineChart',
    title: 'SERU Courses',
    description:
      'Dive into innovation and strategic thinking to solve real-world challenges with cutting-edge approaches.',
  },
  {
    icon: 'Wallet',
    title: 'Security Courses',
    description:
      'Learn to safeguard systems and data with essential security skills for a secure system.',
  },
  {
    icon: 'Sparkle',
    title: 'Vocational Courses',
    description:
      'Gain practical, hands-on skills for specialized careers and industry-ready expertise.',
  },
];

export const BenefitsSection = () => {
  return (
    <section id='benefits' className='container py-24 sm:py-32'>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <div>
          <h2 className='text-lg text-primary mb-2 tracking-wider text-center'>
            Benefits
          </h2>

          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Types of course we offer and more
          </h2>
          {/* <div className='text-lg text-muted-foreground mb-8'>
            <ul className='list-disc flex flex-col gap-4'>
              <li>
                We provide short courses, Apprenticeships and Functional
                skills-Math and English
              </li>
              <li>
                We are a registered training provider helping individuals earn
                recognized qualifications in Health and Social Care, Business,
                and Hospitality.
              </li>
              <li>
                Our directors and staff bring industry experience, management
                skills, and teaching qualifications, along with strong
                connections to sector leaders. This expertise allows us to
                understand and meet the specific needs of the Health, Business,
                and Hospitality sectors, ensuring individuals find the right
                courses for their career paths
              </li>
            </ul>
          </div>  */}
        </div>

        <div className='grid lg:grid-cols-2 gap-4 w-4/5 '>
          {benefitList.map(({ icon, title, description }, index) => (
            <Link key={title} href={routes.courses}>
              <Card className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'>
                <CardHeader>
                  <div className='flex justify-between'>
                    <span className='text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className='text-muted-foreground'>
                  {description}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
