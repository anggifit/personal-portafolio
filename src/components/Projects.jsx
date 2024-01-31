import React from 'react'
import ProjectCard from './ProjectCard'
import {handleClickNav} from '../utils/handleClickNav'
/* import data from '../data.json'
 */

const Projects = () => {
    return (
        <div className='bg-purple-500 w-full h-full min-h-screen' id='projects'>
            <section className="h-full px-8 py-8">
                <div className='flex justify-between items-center py-4 px-6'>
                    <a onClick={handleClickNav('home')}>
                        <span className="material-symbols-outlined text-3xl hover:text-orange-400">home</span>
                    </a>
                    <div className="text-white text-6xl font-bold text-end">
                        Dev<span className="bg-black py-4 px-4 rounded-full text-5xl">Ventures</span>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-0 m-5">
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </section>
        </div>
    )
}

export default Projects
