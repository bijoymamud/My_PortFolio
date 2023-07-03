import { motion } from 'framer-motion';
import React from 'react';
import Img1 from "../assets/Screenshot 2023-07-02 125338.png";
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1 flex lg:mt-10 flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 heading-tight tracking-wide font-semibold text-accent'><span className='py-3'>My Latest</span> <br /> Projects</h2>
              <p className='max-w-sm mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum quos, a harum id doloribus amet quae laboriosam magni magnam.</p>
            </div>

            <div


              className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-6'>
              <div className='group-hover:bg-black/50 w-full h-full absolute  z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 lg:w-[1898px] lg:h-[300px] transition-all duration-500' src={Img1} alt="" />
              <div className='px-1'>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-[20px] tracking-wider font-tertiary font-semibold text-yellow-500'>Front-End Design</div>
                <div className='flex justify-between'>
                  <p className='tracking-wider font-tertiary text-gradient font-semibold'>Project Title: JobHub</p>
                  <div className='flex gap-x-6 absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                    <a target='blank' href="https://calm-pastelito-3365b5.netlify.app/"><span className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>Live</span></a> |
                    <a target='blank' href="https://github.com/bijoymamud/Job-Field"><span className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>Source Code</span></a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div

            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1 '>

            <div className='group md:mb-10 relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 lg:w-[1898px] lg:h-[300px] transition-all duration-500' src="https://i.ibb.co/DLWT8xt/Screenshot-2023-07-02-125946.png" alt="" />
              <div className='px-1'>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-[20px] tracking-wider font-tertiary font-semibold text-yellow-500'>Marn-Stack</div>
                <div className='flex justify-between'>
                  <p className='tracking-wider font-tertiary text-gradient font-semibold'>Project Title: FoodZone</p>
                  <div className='flex gap-x-3 absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                    <a target='blank' href="https://courageous-pavlova-81cca7.netlify.app/"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500  font-semibold'>Live</span></a>
                    <span className='font-tertiary text-gradient font-semibold'>|</span>
                    <div>
                      <a target='blank' href="https://github.com/bijoymamud/Food-Corner"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500 font-semibold'>Client</span></a>
                      <span className='font-tertiary text-gradient font-semibold px-3'>|</span>

                      <a target='blank' href="https://github.com/bijoymamud/Food-Corner-Server"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500 font-semibold'>Server</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='group  relative overflow-hidden border-2 border-white/50 mt-10 rounded-xl'>
              <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 lg:w-[1898px] lg:h-[300px]' src="https://i.ibb.co/fHh0BJB/last.png" alt="" />
              <div className='px-1'>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-[20px] tracking-wider font-tertiary font-semibold text-yellow-500'>Marn-Stack</div>
                <div className='flex justify-between'>
                  <p className='tracking-wider font-tertiary text-gradient font-semibold'>Project Title: Toy Center</p>
                  <div className='flex gap-x-3 absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                    <a target='blank' href="https://toy-corner.web.app/"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500  font-semibold'>Live</span></a>
                    <span className='font-tertiary text-gradient font-semibold'>|</span>
                    <div>
                      <a target='blank' href="https://github.com/bijoymamud/Toys-Center-Client"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500 font-semibold'>Client</span></a>
                      <span className='font-tertiary text-gradient font-semibold px-3'>|</span>

                      <a target='blank' href="https://github.com/bijoymamud/Toys-Center-Server"><span className='text-[20px] tracking-wider font-tertiary text-yellow-500 font-semibold'>Server</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>





        </div>
      </div>
    </section>
  )
};

export default Work;
