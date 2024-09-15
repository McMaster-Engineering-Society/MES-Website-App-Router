'use client';

import { useEffect, useState } from 'react';

import { Sizes } from '@/constant/hatch-bookings/booking-screen-size';

export function useScreenSize(): Sizes {
  const [screenSize, setScreenSize] = useState<Sizes>('sm');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setScreenSize('lg');
      else if (window.innerWidth >= 768) setScreenSize('md');
      else if (window.innerWidth >= 640) setScreenSize('sm');
      else setScreenSize('xs');
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
