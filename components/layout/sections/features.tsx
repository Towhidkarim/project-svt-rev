import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'TabletSmartphone',
    title: 'Mobile Friendly',
    description:
      'Our platform is designed to be fully responsive, providing a seamless experience on',
  },
  {
    icon: 'BadgeCheck',
    title: 'Social Proof',
    description:
      'Showcase testimonials and real-world success stories to build trust and credibility.',
  },
  {
    icon: 'Goal',
    title: 'Targeted Content',
    description:
      'Deliver personalized content tailored to your audiences specific needs and interests.',
  },
  {
    icon: 'PictureInPicture',
    title: 'Strong Visuals',
    description:
      'Engage viewers with high-quality visuals that captivate and communicate your brand message.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Clear CTA',
    description:
      'Encourage action with straightforward, impactful call-to-action buttons and prompts.',
  },
  {
    icon: 'Newspaper',
    title: 'Clear Headline',
    description:
      'Grab attention instantly with a concise headline that communicates your core message.',
  },
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

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className='h-full bg-background border-0 shadow-none'>
              <CardHeader className='flex justify-center items-center'>
                <div className='bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4'>
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color='hsl(var(--primary))'
                    className='text-primary'
                  />
                </div>

                <CardTitle>{title}</CardTitle>
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
