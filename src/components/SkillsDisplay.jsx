import React from 'react';
import Marquee from 'react-fast-marquee';
import data from '../data.json'
import {skillsImage} from '../utils/skillsImage'

function SkillsDisplay() {
    return (        
        <div>
            <h3 className='text-center text-black'>
                Skills
            </h3>
            <div className='pt-8 flex align items-center justify-items-center'>
                <Marquee
                    gradient={false} 
                    speed={50} 
                    pauseOnHover={true}
                    pauseOnClick={true} 
                    delay={0}
                    play={true} 
                    direction="left"
                >
                    {data.skills.map((skill, id)=> (
                        <div 
                            key={id}
                            className='bg-pink-200 shadow-md rounded-lg w-24 h-24 m-3 flex items-center justify-center p-3 transition duration-300 ease-in-out'
                        >
                            <img 
                                src={skillsImage(skill.name)} 
                                alt={skill.name} 
                                className='max-w-full max-h-full'
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default SkillsDisplay
