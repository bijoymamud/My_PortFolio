import React from 'react';
import "./Skill.css";

const Skill = () => {
  return (
    <section class='section ' id='skill'>

      {/* <div className=" container containers">


        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">NodeJS</span>
          <div className="skill-bar">
            <span className="skill-per nodejs">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">ReactJS</span>
          <div className="skill-bar">
            <span className="skill-per reactjs">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">ExpressJS</span>
          <div className="skill-bar">
            <span className="skill-per expressjs">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
      </div> */}
      <div className='w-full'>
        <div className="inner">
          <div className="headers">
            <h1 className='text-center text-[40px] tracking-wider font-primary font-bold mb-2 '>My Skills</h1>
          </div>
          <div className="skill_contailer mx-36">
            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider  font-semibold font-tertiary text-gradient'>HTML 5</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>CSS 3</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>JavaScript</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>React Js</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://i.ibb.co/vdZM28D/png-transparent-js-logo-node-logos-and-brands-icon-removebg-preview.png" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>Node Js</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>

            <div className="skill-box">
              <div className="skill-title">
                <div className="img">
                  <img className='skill-img' src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
                </div>
                <h2 className='text-[20px] tracking-wider font-tertiary text-gradient font-semibold'>MongoDB</h2>
              </div>
              <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, tenetur.</p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
};

export default Skill;