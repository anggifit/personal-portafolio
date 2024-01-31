import React from 'react'
import Typewriter from 'typewriter-effect';
import data from '../data.json'

const Title = () => {
  return (
    <div>
        <section className="h-screen px-12 sm:px-24 flex items-center relative">
            <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
                    <div className="w-full">
                        <h1 className="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8 leading-10">
                            {data.name}
                        </h1>
                        <h1 className="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8 leading-10">
                            I'm 
                            <span className="text-black">
                                <Typewriter
                                    options={{
                                        strings: [`${data.title1}`, `${data.title2}`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Title
