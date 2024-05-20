import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { itemMotionVariants } from '@/app/page';

type HerosectionColumnProps = {
  img?: string;
  imgLocation?: 'top' | 'bottom';
  classname?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const HeroSectionColumn = ({
  img,
  imgLocation = 'top',
  classname,
  style,
  children,
}: HerosectionColumnProps) => {
  return (
    <motion.div
      className={cn([
        `relative aspect-[3/4] select-none rounded-xl lg:aspect-auto`,
        classname,
      ])}
      variants={itemMotionVariants}
      initial='hidden'
      animate='visible'
      style={style}
    >
      {img && (
        <div
          className={cn([
            'hero-bg-image absolute left-[4.16666667%] z-0 h-full w-11/12 rounded-t-xl bg-cover bg-center bg-no-repeat',
            img && imgLocation === 'top' && 'top-0 -mt-16',
          ])}
          style={{
            backgroundImage: img ? `url(${img})` : undefined,
          }}
        />
      )}
      <div className='z-10 h-full w-full p-12'>{children}</div>
    </motion.div>
  );
};

export default HeroSectionColumn;
