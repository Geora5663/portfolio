import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { FaEnvelope, FaLinkedinIn, FaGitlab } from 'react-icons/fa';
import { Contact } from './Contact';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const Footer = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    
    <div className='xl:max-w-[1280px] w-full container mx-auto mt-[180px] mb-[60px] text-dimWhite'>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
            <Contact />
        </ AnimationOnScroll >
    </div>
   
    
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[12px] leading-[27px] text-cream'>&copy; 2022 Geora. All Rights Reserved</p>
      <div className='flex flex-row md:mt-0 mt-6 text-cream'>
        {/* {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`}
          />
        ))}             */}

        <a href="mailto:oglennedward@gmail.com" className='mr-[10px] text-[20px] text-cream'><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/geora/" target="_blank" className='mr-[10px] text-[20px] text-cream'><FaLinkedinIn /></a>
        <a href="https://gitlab.com/oglennedward" target="_blank" className='text-[20px] text-cream'><FaGitlab /></a>
      </div>
    </div>
  </section>
)

export default Footer