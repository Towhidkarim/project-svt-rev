'use client';
import {
  ArrowDown,
  ChevronDown,
  ChevronsDown,
  Github,
  Menu,
  ShoppingCart,
} from 'lucide-react';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
import {
  courseCategories,
  courseInfo,
  TCourseInfoType,
} from '@/lib/courseInfo';
import logoImage from '@/public/gwc-logo.png';
import CartButton from './cart-button';
import { cn } from '@/lib/utils';

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
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/',
    label: 'Home',
  },
  {
    href: routes.courses,
    label: 'Courses',
  },
  {
    href: '/faq',
    label: 'FAQ',
  },
  {
    href: '/about',
    label: 'About Us',
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
  const groupByCategory = (items: TCourseInfoType[]) => {
    const grouped = items.reduce<Record<string, TCourseInfoType[]>>(
      (acc, item) => {
        const { category } = item;

        // Check if the category already exists in the accumulator
        if (!acc[category]) {
          acc[category] = [];
        }

        // Push the item into the appropriate category array
        acc[category].push(item);
        return acc;
      },
      {}
    );

    // Convert the grouped object into an array of { category, items } objects
    return Object.keys(grouped).map((category) => ({
      category,
      items: grouped[category],
    }));
  };
  const groupedItems = groupByCategory(courseInfo);

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
                <SheetTitle className='flex flex-col items-center'>
                  <Link href='/' className='flex flex-col gap-4 items-center'>
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
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className='group flex flex-row font-bold hover:bg-muted py-2 px-2 rounded-xl'>
                Courses{' '}
                <span className='group-focus:rotate-180 transition'>
                  <ChevronDown strokeWidth={1} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='absolute  left-1/2 -translate-x-1/3 rounded-xl'>
                <div className='flex flex-row gap-10 mx-10 '>
                  {groupedItems.map((item, index) => (
                    <div key={index} className='flex flex-col'>
                      <h1 className='text-base my-4 font-semibold'>
                        {item.category}
                      </h1>
                      <div className='flex flex-col gap-4 text-sm w-44'>
                        {item.items.map((v, i) => (
                          <Link
                            href={`/courses/${v.courseUniqueId}`}
                            className=' hover:underline'
                            key={i + 20}
                          >
                            {v.title.slice(0, 45)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* {courseCategories.map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <Link
                        href={`/courses?cat=${item}`}
                        className='rounded-md p-1.5 text-sm hover:bg-muted'
                      >
                        <p className='mb-1 tracking-wide leading-5 capitalize font-semibold text-foreground'>
                          {item}
                        </p>
                      </Link>
                    </DropdownMenuItem>
                  ))} */}
                </div>

                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => {
              if (href !== routes.courses)
                return (
                  <NavigationMenuLink key={href} asChild>
                    <Link
                      href={href}
                      className={cn(
                        'text-base px-4 mx-2 font-bold hover:bg-muted py-2 rounded-xl',
                        {
                          'rounded-full border-2 border-primary hover:bg-primary hover:text-white px-4 py-2':
                            label === 'Contact',
                        }
                      )}
                      prefetch
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                );
              return;
            })}
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
