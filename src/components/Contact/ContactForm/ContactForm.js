import React, { useEffect, useState } from 'react'
import './ContactForm.css'
import { useInView } from 'react-intersection-observer';


const ContactForm = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const { ref: FormRef, inView: FormInView } = useInView({
        triggerOnce: true,  // Trigger animation once when the element comes into view
        threshold: 0.4,  // Trigger when 50% of the element is in view
    });

    useEffect(() => {
        if (FormInView) {
            setIsFormVisible(true)
        }
    }, [FormInView])

    return (
        <div className='ContactFormWrap' ref={FormRef}>

            <div className={`ContactFormCont ${isFormVisible ? 'animate-slide-up' : ''}`}>

                <div className='FormField'>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' name='name' required />
                </div>


                <div className='FormField'>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' name='email' required />
                </div>


                <div className='FormField'>
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' id='subject' name='subject' required />
                </div>


                <div className='FormField'>
                    <label htmlFor='message'>Your Message (Optional)</label>
                    <textarea id='message' name='message' ></textarea>
                </div>

                <div className='FormSubmitCont'>
                    <div className='FormSubmitButton'>
                        Submit
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ContactForm