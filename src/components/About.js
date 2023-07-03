import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AboutImg from "../assets/aboutB.jpg";
import { fadeIn } from '../variants';
import "./About.css";


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className=' bg-contain mix-blend-lighten w-full bg-top'>
            <img className='about__image mx-auto mb-10 md:ms-0 ' src={AboutImg} alt="" />
          </motion.div>

          <div className='w-full'>
            <motion.div

              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1'>

              <h2 className='h2 text-accent'>About Me</h2>
              <h3 className='h3 mb-4'>I am a Web Developer with 5 years of expericence</h3>

              <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti labore cumque unde asperiores vitae consectetur aspernatur praesentium voluptate animi!</p>
            </motion.div>

            <motion.div

              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex gap-x-6 lg:gap-x-10 mb-10 '>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?
                      <CountUp start={0} end={1} duration={10} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?
                      <CountUp start={30} end={50} duration={10} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>

                  Projects <br />
                  Completed
                </div>
              </div>


              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?
                      <CountUp start={60} end={100} duration={10} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied  <br />
                  Clients
                </div>

              </div>

            </motion.div>
          </div>






        </div>

      </div>
    </section>
  )
};

export default About;
