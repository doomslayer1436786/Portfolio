"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid=cols-1 sm:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                    <span>
                    Hello, I'm {" "}
                    </span>
                    <br></br>
        <TypeAnimation
      sequence={[ 
        'Aqeel Memon',
        1000,
        'a Web Developer',
        1000, 
        'a Deep Learning Enthusiast',
        1000,
        'and a App Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

                    </h1>
                    <p className="text-base text-[#ffeaea] sm:text-lg lg:text-xl mb-6">Lorem ipsum heloo hasdguyagu hagdfakyufdg gydgayugsdu gauyghduaybhgd ah;dahdla
                    </p>
                    <div>
                        <button className='w-full sm:w-fit mt-3 px-6 py-3 rounded-full mr-4 bg-blue-50 hover:bg-gradient-to-r from-gray-600 via-blue-500 to-cyan-400 text-black hover:text-white'>Hire Me</button>
                        <button className='w-full sm:w-fit mt-3 px-6 py-3 rounded-full mr-4 bg-blue-50 hover:bg-gradient-to-r from-gray-600 via-blue-500 to-cyan-400 text-black hover:text-white'>Download CV</button>

                    </div>
            </div>
        

        <div className="col-span-5 place-self-center mt-4 lg:mg-0">
    <div className='rounded-full bg-[#1a1919] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
    
        <Image
        src = "/images/Aqeel_Memon.jpg"
        alt="hero-image"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full mt-4'
        width={200}
        height={200}  />
            </div>
        </div>
        </div>

    </section>
  )
}

export default HeroSection
