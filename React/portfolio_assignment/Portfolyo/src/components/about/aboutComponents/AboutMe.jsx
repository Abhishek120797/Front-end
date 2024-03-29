import React from 'react';
import { useOutletContext } from 'react-router-dom';

function AboutMe() {

const user = useOutletContext()
  const social = user.social_handles.map((social)=>{
    return {
      link:social.url,
      title:social.platform,
      text:social.platform.slice(0,3)+"."
    }
  })

  return (
      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10' >

        <div className='mt-4 w-[20rem] md:w-[30rem] flex flex-col space-y-4'>

          <h2 className='text-white text-xl md:text-4xl'>
            A very small stage in a vast cosmic.
          </h2>

          <p >
            A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
            stuff harvesting star light the carbon in our apple pies realm of the galaxies
          </p>

          <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-2'>

            <li>
              <p >Name</p>

              <span className='text-white text-lg'>{user.about.name}</span>
            </li>

            <li >
              <p >Phone Number</p>

              <span className='text-white text-lg'>{user.about.phoneNumber}</span>
            </li>

            <li >
              <p >Email Address</p>

              <span className='text-white text-lg'>{user.email}</span>
            </li>

            <li >
              <p >Social Network</p>

              <div className='text-white text-lg'>

                {social.map((socialdata)=>(
                  <a href={socialdata.link}  
                  title={socialdata.title} 
                  className='m-2'
                  >{socialdata.text}</a>
                ))}

              </div>
            </li>

          </ul>

        </div>

        <figure >
          <img src="./about-banner.jpg" alt="about banner"/>
        </figure>
        
      </div>
  );
}

export default AboutMe;