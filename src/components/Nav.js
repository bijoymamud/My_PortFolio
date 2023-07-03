import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs';

import { Link } from 'react-scroll';


const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <container className="mx-auto">

      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-lg max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link
          to="home"
          activeClass='active'
          smooth={true}
          offset={-200}
          spy={true}
          className=' cursor-pointer w-[60px] h-[60] flex items-center justify-center'><BiHomeAlt></BiHomeAlt></Link>

        <Link

          to="about"
          activeClass='active'
          smooth={true}
          spy={true}
          className='
           cursor-pointer w-[60px] h-[60] flex items-center justify-center'><BiUser></BiUser></Link>

        <Link

          to="service"
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'><BsClipboardData></BsClipboardData></Link>

        <Link

          to="work"
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'><BsBriefcase></BsBriefcase></Link>

        <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}

          className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'><BsChatSquareText></BsChatSquareText></Link>
      </div>
    </container>
  </nav>;
};

export default Nav;
