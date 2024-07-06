import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import htmlIcon from '../assets/html.svg';
import scriptIcon from '../assets/javascript.svg';
import javaIcon from '../assets/Java-Dark.svg';
import phpIcon from '../assets/PHP-Dark.svg';
import cssIcon from '../assets/CSS.svg';

import python from '../assets/python.svg';
import kotlinIcon from '../assets/kotlin.svg';
import cIcon from '../assets/c.svg';
import cppIcon from '../assets/cpp.svg';
import { fadeIn } from '../variants';


const skills = [
  { name: 'JavaScript', icon: <img src={scriptIcon} alt="JavaScript Icon" style={{ width: '50px', height: '50px' }} />, percentage: 80 },
  { name: 'PHP', icon: <img src={phpIcon} alt="PHP Icon" style={{ width: '50px', height: '50px' }} />, percentage: 90 },
  { name: 'HTML', icon: <img src={htmlIcon} alt="HTML Icon" style={{ width: '50px', height: '50px' }} />, percentage: 95 },
  { name: 'CSS', icon: <img src={cssIcon} alt="CSS Icon" style={{ width: '50px', height: '50px' }} />, percentage: 75 },
  { name: 'Java', icon: <img src={javaIcon} alt="Java Icon" style={{ width: '50px', height: '50px' }} />, percentage: 85 },

  { name: 'Express', icon: <img src={python} alt="python Icon" style={{ width: '50px', height: '50px' }} />, percentage: 70 },
  { name: 'Kotlin', icon: <img src={kotlinIcon} alt="Kotlin Icon" style={{ width: '50px', height: '50px' }} />, percentage: 95 },
  { name: 'C', icon: <img src={cIcon} alt="C Icon" style={{ width: '50px', height: '50px' }} />, percentage: 100 },
  { name: 'C++', icon: <img src={cppIcon} alt="C++ Icon" style={{ width: '50px', height: '50px' }} />, percentage: 100 },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const maxPercentage = Math.max(...skills.map(skill => skill.percentage));

  return (
    <section id='service' ref={ref} className='section'>
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='h2 text-accent mb-10'
        >
          My Skills
        </motion.h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex items-center'
            >
              <div className='w-1/3 mr-4'>{skill.icon}</div>
              <div className='w-2/3'>
                <div className='text-lg font-semibold'>{skill.name}</div>
                <div className='relative h-4 rounded-full'>
                  <div
                    className='absolute top-0 left-0 h-full bg-gradient-to-r from-white to-white rounded-full'
                    style={{ width: `${(skill.percentage / maxPercentage) * 100}%` }}
                  ></div>
                </div>
                <div className='text-sm text-gray-600 mt-1'>{skill.percentage}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
