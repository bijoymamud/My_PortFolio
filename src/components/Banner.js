import React from 'react';
//images
import { FaFacebookMessenger, FaGithub, FaLinkedin } from 'react-icons/fa';
//animation
import { TypeAnimation } from 'react-type-animation';
//motiom
import { motion } from 'framer-motion';
// //variants
import { Link } from 'react-scroll';
import { fadeIn } from "../variants";
import "./Banner.css";

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto lg:pb-20 ">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[80px] mb-5 '>
              <div className='flex items-center gap-2
               lg:start-0'>
                <h5 className='text-[20px] font-semibold mb-3 tracking-wide '>Greeting From</h5> <img className='pb-5' src="https://i.ibb.co/pXrd11d/wave.png" alt="" />
              </div>
              <h3 className='tracking-wide  text-gradient'>BIJOY <span>MAMUD</span></h3>
            </motion.h1>


            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='tracking-wide mb-6 text-[30px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'UX/UI Designer',
                2000,
                'Front-End Developer',
                2000
              ]}

                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}

              />

            </motion.div>


            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ullam perspiciatis rerum corrupti aspernatur necessitatibus itaque, magni cumque facilis perferendis? </motion.p>


            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
              <button>
                <Link to='contact' className='btn btn-lg py-4'>Say Hello</Link>
              </button>



            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.8 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0
              '>
              <a href="https://github.com/bijoymamud" target='blank'>
                <FaGithub></FaGithub>
              </a>
              <a target='blank' href="https://m.me/ip.bjoy">
                <FaFacebookMessenger></FaFacebookMessenger>
              </a>
              <a href="https://www.linkedin.com/in/almamudbijoy09/">
                <FaLinkedin></FaLinkedin>
              </a>

            </motion.div>
          </div>

          <div
            className='home__img mx-auto hidden  lg:flex flex-1 lg:max-w-[380px] lg:max-h-[400px]'


          // className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]',
          // {/* <img src={Image} alt="" /> */}
          >




          </div>
        </div>
      </div>
    </section>);
};

export default Banner;
