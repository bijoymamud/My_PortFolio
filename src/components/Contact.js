import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { fadeIn } from '../variants';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgltyv1', 'template_kgrckm8', form.current, 'Uyj6tbzNku2NJChMI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className=' py-16 lg:section' id='contact'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'>
          {/*text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center '>
            <div>
              <h2 className='text-xl uppercase text-accent font-primary font-semibold mb-2 tracking-wide '>Get in Touch</h2>
              <h2 className='text-[45px] lg:text-[90px] lg:font-semibold leading-none mb-12'>Let's work <br /><span className='text-gradient lg:text-[85px]'>Together!</span></h2>
            </div>
          </motion.div>

          {/*form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1  flex flex-col gap-y-6 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'

              type="text"
              name='user_name'
              placeholder='Your Name' />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'

              type="email"
              name='user_email'
              placeholder='Your email' />

            <textarea
              name='message'
              type='text'
              className='bg-transparent border-b py-5 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your Message'></textarea>
            {/* <input type='submit' value={Send} className='btn btn-lg'>Send Message</input> */}
            <div>
              <input type="submit" value="Send" className='btn btn-lg' />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
