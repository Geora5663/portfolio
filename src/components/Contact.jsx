import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('#fullName, #email, #message');

    
    emailjs.sendForm('service_slsrlfy', 'template_rp89stg', form.current, 'FccZ8dODPtrrWqW4l')
        .then((result) => {
            console.log(result.text);
            alert('Message Sent');
            inputs.forEach(input => {
                input.value = '';
            });
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="">
            <h2 className="text-secondary font-montserrat text-center font-bold text-[48px] mb-[30px]">Let's talk!</h2>
            <div className="grid grid-col mb-3">
                <label className='mb-1 text-cream'>Name</label>
                <input type="text" id="fullName" name="user_name" className='rounded-[5px] border-2 p-1 text-black bg-cream'/>
            </div>
            <div className="grid grid-col  mb-3">
                <label className='mb-1 text-cream'>Email</label>
                <input type="email" id="email" name="user_email" className='rounded-[5px] border-2 p-1 text-black bg-cream'/>
            </div>
            <div className="grid grid-col mb-3">
                <label className='mb-1 text-cream'>Message</label>
                <textarea name="message" id="message" rows="4" className='rounded-[5px] border-2 p-1 text-black bg-cream'/>
            </div>
            <button type="submit" value="Send" className='block w-[100%] border-secondary py-2 px-10 text-primary bg-secondary rounded-[10px]'>Submit</button>
        </form>
    );
};