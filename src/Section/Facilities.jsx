import { useState, useEffect } from 'react';
import Button from '../Component/Button';
import PortfolioCard from '../Component/PortfolioCard';

import { facilitiesArray } from '../Utills/Facilities';
import { btn } from '../Utills/Button';

import { motion } from 'framer-motion';
import AnimationSection from '../Component/AnimationSection';

function Facilities() {
  const [facilities, setFacilities] = useState(facilitiesArray);
  const [index, setIndex] = useState(0);

  const handleClick = (id) => {
    setIndex(id);
  };

  return (
    <div className='w-full h-auto py-4 my-10' id='portfolio'>
      <div className='head  container mx-auto  text-center'>
        <AnimationSection>
          <h4 className='font-semibold text-sky-400 text-xl'>Facilities</h4>
          <h2 className='text-3xl font-extrabold mt-2'>
            Our Offered Facilities
          </h2>
          <p className='my-4'>
            At Serene Care Center, we are dedicated to providing a comfortable
            and nurturing environment for our patients. Our state-of-the-art
            facilities are designed to meet the diverse needs of individuals
            seeking healthcare services. Here are some of the exceptional
            facilities
          </p>
        </AnimationSection>
      </div>
      <div className='btn flex flex-row flex-wrap gap-2 items-center justify-center py-4 mx-auto'>
        {btn.map((item) => (
          <div key={item.id}>
            <Button onClick={() => handleClick(item.id)}>{item.name}</Button>
          </div>
        ))}
      </div>
      <div className='card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4'>
        {facilities
          .filter((item) => {
            if (index == 0) {
              return item;
            } else if (item.index == index) {
              return item;
            }
          })
          .map((item) => (
            <motion.div layout key={item.id}>
              <PortfolioCard image={item.img} title={item.title} on />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Facilities;
