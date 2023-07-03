import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container w-full mx-auto'>

        <div className='flex  justify-between items-center'>
          <div>
            <img className='h-[100px]' src="https://i.ibb.co/bQzpffC/Modern-Initial-MB-Logo.png" alt="" />
          </div>
          <button className='btn btn-sm uppercase'>Resume</button>
        </div>

      </div>

    </header>
  )
};

export default Header;
