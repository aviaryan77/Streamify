'use client';
import React, { FC } from 'react';
import { motion } from 'motion/react';
import { IMatrics } from '@/app/(dashboard)/app/DATA';

const Bar: FC<IMatrics> = ({ level, name, value }) => {
  const bar_width = `${level}`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className='my-2 text-white bg-gray-300 rounded-2xl dark:bg-dark-300'>
      <motion.div
        className='flex items-center px-4 py-10 rounded-2xl bg-gradient-to-r to-blue-600 from-fuchsia-600 '
        style={{ width: bar_width }}
        variants={variants}
        initial={'initial'}
        animate={'animate'}
      >
        {/* <Icon className="w-6 h-6 mr-3 bg-blue-600 rounded-full" /> */}
        {name}: {value}
      </motion.div>
    </div>
  );
};

export default Bar;
