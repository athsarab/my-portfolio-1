import React, { useState } from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='lg:section py-10' id='contact'>
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          className='h2 text-accent mb-10'
        >
          Contact Me
        </motion.h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Contact information */}
          <div className='flex items-center'>
            <div className='w-1/3 mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-accent'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
            </div>
            <div className='w-2/3'>
              <div className='text-lg font-semibold'>Address</div>
              <div className='text-sm text-white mt-1'>

                123 Main Street, Colombo, Sri Lanka
              </div>
            </div>
          </div>
          {/* Form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            onSubmit={handleSubmit}
            className='flex flex-col items-center bg-transparent border border-gray-300 rounded-md py-6 px-8 '
          >
          
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Name'
              className='w-full border-gray-300 rounded-md py-2 px-4 mb-4 bg-transparent outline-none border-b-2 '
              required
            />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email'
              className='w-full border-gray-300 rounded-md py-2 px-4 mb-4 bg-transparent outline-none border-b-2 '
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Your Message'
              className='w-full border-gray-300 rounded-md py-2 px-4 mb-4 resize-none bg-transparent outline-none border-b-2 '
              rows={5}
              required
            ></textarea>
            <button
              type='submit'
              className='btn btn-lg mt-2 bg-transparent border border-accent text-accent font-semibold rounded-full transition duration-300 hover:bg-accent hover:text-white'
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
