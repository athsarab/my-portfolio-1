import React from 'react';

// Images
import Image from '../assets/Athsara_Portfolio.png';

// Icons
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// Type animation
import { TypeAnimation } from 'react-type-animation';

// Motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='text-[50px] font-bold leading-[0.8] lg:text-[110px]'
            >
              Hi, I'm <span className='text-accent'>Athsara Bimalka</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Designer',
                  2000,
                  'Freelancer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-white/50'
            >
              I'm a undergraduate student ,full stack web developer and designer. I create beautiful and functional websites and applications.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-10 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.linkedin.com/in/%20athsara-bimalka-501399252' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-3xl text-white hover:text-accent' />
              </a>
              <a href='https://github.com/athsarab' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-3xl text-white hover:text-accent' />
              </a>
              <a href='https://www.twitter.com/AthsaraBimalka' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='text-3xl text-white hover:text-accent' />
              </a>
              <a href='https://www.facebook.com/athsara.bimalke' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-3xl text-white hover:text-accent' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-3xl text-white hover:text-accent' />
              </a>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] mt-[-170px]' // Add negative margin here
          >
            <img src={Image} alt='avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
