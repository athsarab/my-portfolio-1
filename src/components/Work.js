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
    description: 'MERN full stack projects',
    link: 'https://your-upload-link-1.com'
  },
  {
    image: Image2,
    description: 'Online shopping web app PHP',
    link: 'https://your-upload-link-2.com'
  },

  {
    image: Image3,
    description: 'Mobile game development using Kotlin',
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'Vehicle rental system using Java',
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'Hospital management system using Java',
    link: 'https://your-upload-link-3.com'
  },
  {
    image: Image3,
    description: 'Task mobile app using Kotlin',
    link: 'https://your-upload-link-3.com'
  },
  // Add more works as needed
];

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)'
};

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              whileHover={hoverEffect}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out'
            >
              <motion.div
                className='bg-cover bg-center h-48'
                style={{ backgroundImage: `url(${work.image})` }}
                variants={imageVariant}
              ></motion.div>
              <div className='p-4'>
                <motion.p className='text-white mb-2' variants={textVariant}>
                  {work.description}
                </motion.p>
                <motion.a
                  href={work.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                  variants={textVariant}
                >
                  View Work
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
