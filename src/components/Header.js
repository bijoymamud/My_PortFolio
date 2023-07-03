import React from 'react';
import CV from "../assets/Bijoy_Resume.pdf";
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container w-full mx-auto'>

        <div className='flex  justify-between items-center'>
          <div>
            <img className='h-[100px]' src="https://i.ibb.co/bQzpffC/Modern-Initial-MB-Logo.png" alt="" />
          </div>

          <a download="" href={CV} className='btn pt-3 btn-sm uppercase'>Resume</a>

        </div>

      </div>

    </header>
  )
};

export default Header;
