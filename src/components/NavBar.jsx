import React from 'react';
import {handleClickNav} from '../utils/handleClickNav'

const NavBar = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-4 px-6">
                <div>
                    <a onClick={handleClickNav('home')}>
                        <span className="material-symbols-outlined text-3xl hover:text-orange-400">home</span>
                    </a>
                </div>
                <div className="flex justify-center space-x-10">
                    <a
                        className="text-black font-semibold text-lg hover:text-orange-400"
                        onClick={handleClickNav('about-me')}
                    >
                    About Me
                </a>
                <a
                    href="#"
                    className="text-black font-semibold text-lg hover:text-orange-400"
                    onClick={handleClickNav('projects')}
                >
                    DevVentures
                </a>
                <a href="#" className="text-black font-semibold text-lg hover:text-orange-400">
                    LinkUp
                </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
