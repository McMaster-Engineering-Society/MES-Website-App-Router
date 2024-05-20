import * as React from 'react';

import { cn } from '@/lib/utils';

import Footer from '@/components/layout/Footer';

import DynamicNavbar from './navbar/DynamicNavbar';

type LayoutProps = {
  noFooter?: boolean;
  className?: string;
  children: React.ReactNode;
  noBackground?: boolean;
  darkMode?: boolean;
  transparentNav?: boolean;
};

const Layout = ({
  noFooter,
  className,
  children,
  noBackground = false,
  darkMode = false,
  transparentNav = false,
}: LayoutProps) => {
  return (
    <div
      className={cn([
        !noBackground &&
          "bg-[url('/images/gerald-hatch-centre-winter.jpg')] bg-cover bg-fixed bg-center",
        className,
      ])}
    >
      <div className={cn([!noBackground && 'bg-white/75'])}>
        <DynamicNavbar darkMode={darkMode} noBg={transparentNav} />
        {children}
        {!noFooter && <Footer darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default Layout;
