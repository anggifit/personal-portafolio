import React from 'react'
import data from '../data.json'
import SkillsDisplay from './SkillsDisplay'
import {handleClickNav} from '../utils/handleClickNav'


const AboutMe = () => {
    return (
        <div id='about-me' className="h-full">
            <section className="min-h-screen bg-pink-600">
                <div className="relative px-8 py-8">
                    <div className='flex justify-between items-center py-4 px-6'>
                        <h1 className="text-white text-6xl font-bold">
                            <span className="bg-black py-4 px-4 rounded-full text-5xl">About</span>Me
                        </h1>
                        <a onClick={handleClickNav('home')}>
                            <span className="material-symbols-outlined text-3xl hover:text-orange-400">home</span>
                        </a>
                    </div>
                </div>
            <div className="grid grid-cols-12 gap-6 px-8 py-8 ml-6">
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5 flex justify-center items-center">
                    <div className="py-4 flex">
                        <p className='text-xl text-white leading-9'>
                            {data.aboutMe}
                        </p>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7 flex justify-center">
                    <img    
                        src='/woman-working-laptop-removebg-preview.png'
                        className="w-auto" 
                    />
                </div>
            </div>
            <SkillsDisplay/>
        </section>
        </div>
    )
}

export default AboutMe
