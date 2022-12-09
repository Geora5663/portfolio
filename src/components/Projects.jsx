import React from 'react';
import { aprnet, outbreakVanguard, upDiliman, upLinguistics, myCoreFloor, manasotaMovers } from '../assets';
import styles, { layout } from '../style';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";



const Projects = () => (
  <section id="projects" className={`${styles.boxWidth} container mx-auto my-[180px] py-[90px] text-dimWhite`}> 
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <h2 className="text-secondary font-montserrat text-center font-bold text-[48px] mb-[60px]">My Projects</h2>
    </ AnimationOnScroll >  
  
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 font-inconsolata">
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={aprnet} alt="Asia Pacific Research Network"  className='rounded-t-[4px]' />
        <div className='p-4'>
          <h3 className=" text-primary font-montserrat font-bold text-[18px] mb-[5px]">Asia Pacific Research Network</h3>
          <p>Revamp the website including the data, modify the CMS for ease in posting articles.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Wordpress</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>           
          </ul>
        </div>
      </div>
    </AnimationOnScroll >

      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={outbreakVanguard} alt=""  className='rounded-t-[4px]'/>
        <div className='p-4'>
          <h3 className="text-primary font-montserrat font-bold text-[18px] mb-[5px]">Outbreak Vanguard</h3>
          <p>Built a web app using Django for teachers to see the data of the students from the mobile app.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Python</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Django</li>  
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>               
          </ul>
        </div>
        
      </div>
      </AnimationOnScroll >
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={upDiliman} alt="" className='rounded-t-[4px]'/>
        <div className='p-4'>
          <h3 className="text-primary font-montserrat font-bold text-[18px] mb-[5px]">University of the Philippines Diliman</h3>
          <p>Built a website for the administration in posting various articles and events.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Wordpress</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>           
          </ul>
        </div>
       
      </div>
      </AnimationOnScroll >
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={upLinguistics} alt="" className='rounded-t-[4px]'/>
        <div className='p-4'>
          <h3 className="text-primary font-montserrat font-bold text-[18px] mb-[5px]">University of the Philippines Linguistics</h3>
          <p>Built a website for the professors in posting various articles and events in the college.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Wordpress</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>           
          </ul>
        </div>
        
      </div>
      </AnimationOnScroll >
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={myCoreFloor} alt="" className='rounded-t-[4px]'/>
        <div className='p-4'>
          <h3 className="text-primary font-montserrat font-bold text-[18px] mb-[5px]">My Core Floor</h3>
          <p>Built a website for the clients/subscribers in accessing exclusive workout exercises in eliminating pelvic pain based on the scores.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">PHP</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Codeigniter</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>           
          </ul>
        </div>
        
      </div>
      </AnimationOnScroll >
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"> 
      <div className="bg-cream min-h-[450px] relative border-[0px] border-secondary rounded-[5px] text-primary">
        <img src={manasotaMovers} alt="" className='rounded-t-[4px]'/>
        <div className='p-4'>
          <h3 className="text-primary font-montserrat font-bold text-[18px] mb-[5px]">Manasota Movers</h3>
          <p className="mb-[10px]">Built a website for a moving company.</p>
          <ul className="absolute bottom-[20px]">
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">Wordpress</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">JavaScript</li>
            <li className="w-fit inline-block py-1 px-3 bg-secondary rounded-[5px] mx-1 my-1 text-[14px]">jQuery</li>   
          </ul>
        </div>
        
      </div>
      </AnimationOnScroll >
  </div>
</section>
)


export default Projects