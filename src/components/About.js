import React from 'react';
// countup
import CountUp from 'react-countup';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// intersection observer hook
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id='about' ref={ref} className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-12'>
          {/* Image Container */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top lg:bg-center'>
            {/* Assuming bg-about class is handling the background image */}
          </div>
          
          {/* Text Container */}
          <div className='flex-1'>
            <motion.h2
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='h2 text-accent mb-6'
            >
              About Me
            </motion.h2>
            <motion.h3
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='text-2xl font-semibold mb-4'
            >
              Who am I?
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='mb-4'
            >
         As a dynamic Software Engineering undergraduate at SLIIT, I'm dedicated to transforming ideas into digital realities. With a strong passion for coding and a solid foundation in IT, I'm proficient in Java, PHP, C++, and the MERN stack (React, Node, Express). I focus on creating seamless web applications and innovative solutions that resonate with users.

I'm seeking opportunities to contribute my skills and creativity to groundbreaking software projects, excited by the intersection of technology and human experience. Let's connect to explore how my programming expertise and passion for innovation can elevate your team's endeavors.
            </motion.p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='mr-6'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> undergraduate
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={25} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg bg-accent text-white py-3 px-8 rounded-full shadow-lg hover:bg-accent-dark transition mt-4'>
                Download CV
              </button>
              <a href='#' className='text-gradient hover:underline mt-4'>
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
