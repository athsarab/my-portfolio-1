import React from 'react';
import { FaJsSquare, FaPhp, FaCss3Alt, FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';
import htmlIcon from '../assets/html.svg'; // Import HTML SVG icon
import scriptIcon from '../assets/javascript.svg'; // Import HTML SVG icon
import javaIcon from '../assets/Java-Dark.svg'; // Import HTML SVG icon
import phpIcon from '../assets/PHP-Dark.svg'; // Import HTML SVG icon
import css from '../assets/CSS.svg'; // Import HTML SVG icon

// Update your skills data
const skills = [
  { name: 'JavaScript', icon: <img src={scriptIcon} alt="script Icon" style={{ width: '50px', height: '50px' }} />, percentage: 80 },
  { name: 'PHP', icon: <img src={phpIcon} alt="php Icon" style={{ width: '50px', height: '50px' }} />, percentage: 90 },
  { name: 'HTML', icon: <img src={htmlIcon} alt="HTML Icon" style={{ width: '50px', height: '50px' }} />, percentage: 95 },
  { name: 'CSS', icon: <img src={css} alt="css Icon" style={{ width: '50px', height: '50px' }} />, percentage: 75 },
  { name: 'Java',  icon: <img src={javaIcon} alt="java Icon" style={{ width: '50px', height: '50px' }} />, percentage: 85 },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Calculate the maximum percentage value
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
