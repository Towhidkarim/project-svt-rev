'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Building2, Clock, Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { contactDetails, contactSubjects } from '@/lib/constants';
import SendContactInfoAction from '@/lib/actions';
import { toast } from 'sonner';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('sub') ?? '';
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject,
      message: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;

    setIsLoading(true);
    const response = await SendContactInfoAction({
      firstName,
      lastName,
      email,
      subject,
      message,
    });
    if (response.ok) {
      toast("Sent Succesfully, We'll get back to you soon!");
    } else toast('Something Went Wrong, please try again');
    setIsLoading(false);

    // const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
    // await SendContactInfoAction();
    // window.location.href = mailToLink;
  }

  return (
    <section id='contact' className='container py-24 sm:py-32'>
      <section className='flex flex-col-reverse md:flex-row gap-8 justify-center items-center'>
        <div>
          <div className='mb-4'>
            <h2 className='text-lg text-primary mb-2 tracking-wider'>
              Contact
            </h2>

            <h2 className='text-3xl md:text-4xl font-bold'>Connect With Us</h2>
          </div>
          <p className='mb-8 text-muted-foreground lg:w-5/6'>
            Contact us for any queries you may have, we will reach out as soon
            as we can
          </p>

          <div className='flex flex-col gap-4'>
            <div>
              <div className='flex gap-2 mb-1'>
                <Building2 />
                <div className='font-bold'>Find us</div>
              </div>

              <div>{contactDetails.address}</div>
            </div>

            <div>
              <div className='flex gap-2 mb-1'>
                <Phone />
                <div className='font-bold'>Call us</div>
              </div>

              <div>{contactDetails.phoneNumber}</div>
            </div>

            <div>
              <div className='flex gap-2 mb-1'>
                <Mail />
                <div className='font-bold'>Mail US</div>
              </div>

              <div>{contactDetails.mail}</div>
            </div>

            <div>
              <div className='flex gap-2'>
                <Clock />
                <div className='font-bold'>Visit us</div>
              </div>

              <div>
                <div>Monday - Friday</div>
                <div>8AM - 4PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className='bg-muted/60 dark:bg-card'>
          <CardHeader className='text-primary text-2xl'>
            Want a Callback? Contact us, leave us your information
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid w-full gap-4'
              >
                <div className='flex flex-col md:!flex-row gap-8'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Leopoldo' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Miranda' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='user@gmail.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Input
                          type='text'
                          placeholder='Subject'
                          {...field}
                          disabled={subject !== ''}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder='Your message...'
                            className='resize-none'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button disabled={isLoading} className='mt-4'>
                  Send message
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
