import { motion } from 'framer-motion';
import React from 'react';
import { } from 'react-icons/bs';
import { fadeIn } from '../variants';


const services = [
  {
    name: "Front-End Developer",
    description:
      'Crafting captivating digital experiences that turn your vision into reality! As a talented front-end developer, I specialize in creating visually stunning websites with seamless user experiences. Lets collaborate and bring your online presence to life!'
  },
  {
    name: "Marn Stack Developer",
    description:
      'I specialize in creating custom websites using the MERN stack, tailored to your unique requirements.I deliver high-quality, responsive websites that provide an exceptional user experience.'
  },
  {
    name: "UX/UI Design",
    description:
      'As a skilled UI/UX designer, I combine creativity, empathy, and expertise to create intuitive interfaces that engage and inspire.'
  },
  {
    name: "Digital Marketing",
    description:
      'From SEO optimization to engaging social media campaigns, lets connect and skyrocket your online presence to new heights.'
  }


]

const Services = () => {
  return (
    <div className='section' id='service'>
      <div className="container mx-auto mt-20 lg:mt-0">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-10 lg:mb-0'>
            <h2 className='h2 text-accent'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I am a Web Developer with 5 years of expericence</h3>
            <button className='btn btn-sm'>See My Work</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1'>
            <div >
              {
                services.map((service, index) => {
                  const { name, description } = service;
                  return (
                    <div className='border-b border-white/20
                    mb-10' key={index}>
                      <div className='max-w-[476px] mb-4'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold  mt-5'>{name}</h4>
                        <p className='font-secondary mt-3 leading-tight'>{description}</p>
                      </div>
                      <div>

                      </div>
                    </div>
                  );
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Services;
