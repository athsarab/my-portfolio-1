import React from 'react';
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Intersection observer hook
import { useInView } from 'react-intersection-observer';
// Images
import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';

const works = [
  {
    image: Image1,
    description: 'MERN full stack projects ',
    link: 'https://your-upload-link-1.com'
  },
  {
    image: Image2,
    description: 'online shopping web app PHP',
    link: 'https://your-upload-link-2.com'
  },
  {
    image: Image2,
    description: 'online food app using PHP',
    link: 'https://your-upload-link-2.com'
  },
  {
    image: Image3,
    description: 'Mobile game development using kotling',
   
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'vehical rental system using java',
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'hospital management system using java',
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'Task mobil app using kotling',
    link: 'https://your-upload-link-3.com'
  },
  // Add more works as needed
];

const Work = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id='work' ref={ref} className='section'>
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='h2 text-accent mb-10'
        >
          My Work
        </motion.h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex flex-col items-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className='bg-work bg-contain bg-no-repeat h-[158px] w-[200px] mb-0.1' // Reduced margin-bottom from 4 to 2
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <p className='text-white-500'>{work.description}</p>
              <a href={work.link} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                View Work
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
