import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'Blocks',
    title: 'Build Brand Trust',
    description:
      'Establish credibility and reliability with your audience through consistent, high-quality interactions.',
  },
  {
    icon: 'LineChart',
    title: 'Engage More Learners',
    description:
      'Attract and retain students by offering relevant, compelling educational content tailored to their needs.',
  },
  {
    icon: 'Wallet',
    title: 'Higher Conversions',
    description:
      'Convert interest into action by guiding prospects through a seamless, user-centered experience',
  },
  {
    icon: 'Sparkle',
    title: 'Enhance Learning Experience',
    description:
      'Refine educational approaches with data-driven insights to improve student engagement and outcomes.',
  },
];

export const BenefitsSection = () => {
  return (
    <section id='benefits' className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-2 place-items-center lg:gap-24'>
        <div>
          <h2 className='text-lg text-primary mb-2 tracking-wider'>Benefits</h2>

          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Your Shortcut to Success
          </h2>
          <div className='text-lg text-muted-foreground mb-8'>
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
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 w-full'>
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'
            >
              <CardHeader>
                <div className='flex justify-between'>
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color='hsl(var(--primary))'
                    className='mb-6 text-primary'
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
};
