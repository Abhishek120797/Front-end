import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Contact() {

  const user = useOutletContext()
  return (
    <section>
        <div className='flex flex-col items-center m-2 p-2 gap-3'>

          <h2 className='text-white text-2xl md:text-4xl lg:text-6xl'>Get In Touch</h2>

          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center md:m-10 md:p-2'>

            <form action="./index.html" method="post" className='flex flex-col justify-center items-center space-y-6' >

              <input  type="text" name="name" placeholder="Full name" autoComplete="off" required
              className='bg-black text-xl border-b border-gray-black h-14 w-64  md:w-[450px] focus:outline-none focus:border-white'
              />

              <input  type="email" name="email_address" placeholder="Email address" autoComplete="off" required
              className='bg-black text-xl border-b border-gray-black h-14 w-64  md:w-[450px] focus:outline-none focus:border-white'
                />

              <input  type="tel" name="phone" placeholder="Phone" autoComplete="off" 
              className='bg-black text-xl border-b border-gray-black h-14 w-64  md:w-[450px] focus:outline-none focus:border-white'
              />

              <textarea  name="message" placeholder="Enter massges" required 
              className='bg-black text-xl border-b border-gray-black h-40 w-64  md:w-[450px] focus:outline-none focus:border-white'
              ></textarea>

              <button type="submit" 
              className='text-white bg-gray-black flex-none m-1 p-1 h-12 w-40 flex items-center justify-center hover:bg-black hover:border hover:border-white'
              >
                <div className='flex gap-1'>
                  <span>Get A Quote</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </button>

            </form>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
              width="600" height="450" style={{"border": 0}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="map h-64 w-80 md:h-[450px] md:w-[600px] m-2 p-2"></iframe>

            <div className='m-1 p-1 md:m-2 md:p-2 flex justify-center items-center h-[450px] w-[350px]'>
              <ul className='m-1 p-1 md:m-2 md:p-2 flex  flex-col justify-between'>

                <li className='flex flex-col md:flex-row justify-between m-1 p-1 md:m-2 md:p-2 gap-6'>

                  <div >
                    <img src="./contact-icon-1.png" 
                      />
                  </div>

                  <div >
                    <span >{user.about.phoneNumber}</span>
                  </div>

                </li>

                <li className='flex flex-col md:flex-row justify-between m-1 p-1 md:m-2 md:p-2 gap-6'>

                  <div >
                    <img src="./contact-icon-2.png"
                      />
                  </div>

                  <div >
                    <address>
                      {user.about.address}
                    </address>
                  </div>

                </li>

                <li className='flex flex-col md:flex-row justify-between m-1 p-1 md:m-2 md:p-2 gap-6'>

                  <div >
                    <img src="./contact-icon-3.png"/>
                  </div>

                  <div>
                    <span >{user.email}</span>
                  </div>

                </li>

              </ul>
            </div>
          </div>

        </div>
      </section>
  );
}

export default Contact;