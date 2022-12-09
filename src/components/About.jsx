import React from 'react';
import styles from '../style';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const About = () => (
  <section id="about" className="xl:max-w-[1280px] w-full container mx-auto my-[180px] py-[90px] text-dimWhite">
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
      <h2 className="text-secondary font-montserrat text-center font-bold text-[48px] mb-[30px]">About Me</h2>
      <div className='text-cream text-center mb-[90px]'>
        <p className='text-[18px]'>Here you will find information about me, what I do,and current skills mostly in terms <br className='sm:block hidden'/> of programming and technology</p>
      </div>
    </AnimationOnScroll>
   

    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce="true">
          <h3 className='text-secondary font-montserrat font-bold text-[32px] mb-[30px]'>Get to know me!</h3>
          <div className='text-cream text-[18px]'>
            <p className='mb-[15px]'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p className='mb-[15px]'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          </div>
          </AnimationOnScroll>
      </div>
      
      <div>
        <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce="true">
          <h3 className='text-secondary font-montserrat font-bold text-[32px] mb-[30px]'>My Skills</h3>
          <ul className='text-primary'>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[16px]">HTML</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">CSS/Sass</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Python</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">PHP</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">jQuery</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">React</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Django</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Bootstrap</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Tailwind</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">GitHub</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">GitLab</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Wordpress</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Adobe Photoshop</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Figma</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Canva</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">SEO</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1">Responsive Design</li>
          </ul>
        </AnimationOnScroll>
      </div>
    </div>
  </section>
)

export default About