import React from 'react';
import styles from '../style';


const Hero = () => (
  <section className=" min-h-[100vh] relative ">
    <div className="hero-caption mx-auto flex justify-center items-center absolute top-[38%] left-[0%] right-[0%] -translate-y-[50%] width-[100%]">
      <div>
        <h1 className='text-secondary font-montserrat font-bold text-[72px] font-semi-bold text-center leading-[82px] '>Frontend Web Developer</h1>
        <p className="text-[20px] mt-[30px] text-center text-cream">A Frontend focused Web Developer specializing in creating websites and web applications.</p>
      </div>
  </div>
</section>
);


export default Hero