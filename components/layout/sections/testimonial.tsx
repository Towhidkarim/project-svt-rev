'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote, Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: 'https://i.pravatar.cc/250?img=58',
    name: 'James Parker',
    userName: 'Product Manager',
    comment:
      'The course offered a comprehensive understanding of leadership skills, and I particularly appreciated the practical approach to problem-solving. My tutor, Emma, provided continuous support and feedback. ',
    rating: 5.0,
  },
  {
    image: 'https://www.linkedin.com/in/leopoldo-miranda/',
    name: 'Sophia Collins',
    userName: 'Cybersecurity Analyst',
    comment:
      'I gained so much from this course. The resources were clear, and the assignments were challenging but rewarding. The feedback I received from my tutor, Sarah, was always constructive and helped me improve my skills ',
    rating: 4.8,
  },

  {
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Adam Johnson',
    userName: 'GreenTech Innovations',
    comment:
      'I cant thank this team enough for the knowledge and support theyve given me. The course content was thorough, and I felt confident in my learning journey. Special thanks to my tutor, Karen, for her unwavering support throughout.',
    rating: 4.9,
  },
  {
    image: 'https://x.com/leo_mirand4',
    name: 'Ethan Parker',
    userName: 'Data Scientist',
    comment:
      'The course was a great experience, and it gave me the tools to make informed decisions in my career. My tutor, Mark, was always available to help and gave excellent feedback that helped me improve at every stage',
    rating: 5.0,
  },
  {
    image: 'https://www.linkedin.com/in/leopoldo-miranda/',
    name: 'Ava Mitchell',
    userName: 'IT Project Manager',
    comment:
      'I feel so lucky to have had Keith as my Tutor. His patience, guidance and encouragement are second to none. I found the recourses, structure and tutor feedback valuable and after each module I was pushed to complete another. With an attitude of gratitude,',
    rating: 5.0,
  },
  {
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    name: 'Isabella Reed',
    userName: 'DevOps Engineer',
    comment:
      'The course was really helpful and allowed me to broaden my thinking when it comes to reviewing/making business decisions. Cheryl was a great help and offered exceptional support and guidance when required. I would highly recommend this course to anyone lo',
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          Testimonials
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className='relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto'
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <Card className='bg-muted/50 dark:bg-card rounded-2xl'>
                <CardContent className='pt-6 pb-0'>
                  <div className='flex gap-1 pb-6'>
                    {/* <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' /> */}
                    <Quote size={40} className='fill-primary stroke-primary' />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className='flex flex-row items-center gap-4'>
                    <Avatar>
                      <AvatarImage
                        className='object-cover'
                        src={review.image}
                        alt='radix'
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className='flex flex-col'>
                      <CardTitle className='text-lg'>{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
