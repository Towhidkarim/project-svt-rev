'use client';
import { ChevronsDown, Github, Menu, ShoppingCart } from 'lucide-react';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ToggleTheme } from './toogle-theme';
import { categories, routes } from '@/lib/constants';
import { courseCategories } from '@/lib/courseInfo';
import logoImage from '@/public/gwc-logo.png';
import CartButton from './cart-button';

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: '/#testimonials',
    label: 'Testimonials',
  },
  {
    href: routes.courses,
    label: 'Courses',
  },
  {
    href: '/#team',
    label: 'Team',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
];

const featureList: FeatureProps[] = [
  {
    title: 'Showcase Your Value ',
    description: 'Highlight how your product solves user problems.',
  },
  {
    title: 'Build Trust',
    description:
      'Leverages social proof elements to establish trust and credibility.',
  },
  {
    title: 'Capture Leads',
    description:
      'Make your lead capture form visually appealing and strategically.',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className='shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card'>
      <Link href='/' className='font-bold text-lg flex items-center'>
        {/* <ChevronsDown className='bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white' /> */}
        <Image
          className=' w-14 h-auto mr-2  text-white'
          src={logoImage}
          alt='logo'
        />
      </Link>
      {/* <!-- Mobile --> */}
      <div className='flex items-center gap-3 lg:hidden'>
        <CartButton className='xl:hidden' />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer lg:hidden'
            />
          </SheetTrigger>

          <SheetContent
            side='left'
            className='flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary'
          >
            <div>
              <SheetHeader className='mb-4 ml-4'>
                <SheetTitle className='flex items-center'>
                  <Link href='/' className='flex items-center'>
                    <Image
                      className='rounded-lg w-14 h-auto mr-2  text-white'
                      src={logoImage}
                      alt='logo'
                    />
                    Greenwich Central
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className='flex flex-col gap-2'>
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant='ghost'
                    className='justify-start text-base'
                  >
                    <Link href={href} prefetch>
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className='flex-col sm:flex-col justify-start items-start'>
              <Separator className='mb-2' />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className='hidden lg:block mx-auto'>
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-card text-base'>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid w-[600px] grid-cols-2 gap-5 p-4'>
                <Image
                  src={logoImage}
                  alt='logo'
                  className='h-full w-full rounded-md object-contain'
                  width={600}
                  height={600}
                />
                <ul className='flex flex-col gap-2'>
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className='rounded-md p-3 text-sm hover:bg-muted'
                    >
                      <p className='mb-1 font-semibold leading-none text-foreground'>
                        {title}
                      </p>
                      <p className='line-clamp-2 text-muted-foreground'>
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-card text-base'>
              Courses
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid w-[400px] grid-cols-3 gap-5 p-4'>
                {courseCategories.map((item, index) => (
                  <Link
                    href={`/courses?cat=${item}`}
                    key={index}
                    className='rounded-md p-3 text-sm hover:bg-muted'
                  >
                    <p className='mb-1 tracking-wide leading-5 capitalize font-semibold text-foreground'>
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className='text-base px-2' prefetch>
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <CartButton className='hidden lg:block' />
      <div className='hidden lg:flex justify-center items-center gap-5'>
        <ToggleTheme />
      </div>
    </header>
  );
};
