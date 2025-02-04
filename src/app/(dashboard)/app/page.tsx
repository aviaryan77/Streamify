`use client`;
import React from 'react';
import { Bar } from '@/components';
import { IMatrics, metrices } from './DATA';
import { Heading } from '@chakra-ui/react';

const AppPage = () => {
  return (
    <div className='px-6 py-2'>
      <div className='grid gap-6 md:grid-cols-2'></div>
      <Heading className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-6'>
        Key Metrics:
      </Heading>
      {/* metrices */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='my-2'>
          {metrices.map((matrics: IMatrics) => (
            <Bar key={matrics.name} {...matrics} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPage;
