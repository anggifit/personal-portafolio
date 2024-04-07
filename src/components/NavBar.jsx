import React, { useState } from 'react';
import { handleClickNav } from '../utils/handleClickNav';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className="flex justify-between items-center py-4 px-6">
                <div>
                    <a onClick={handleClickNav('home')}>
                        <span className="material-symbols-outlined text-3xl hover:text-pink-400">home</span>
                    </a>
                </div>
                {/* Mostrar el menú de hamburguesa en dispositivos móviles */}
                <div className="md:hidden">
                    <button className="text-black focus:outline-none" onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {showMenu ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            )}
                        </svg>
                    </button>
                </div>
                {/* Mostrar el menú en laptops */}
                <div className="hidden md:flex space-x-10">
                    <a
                        href="#"
                        className="text-black font-semibold text-lg hover:text-pink-400"
                        onClick={handleClickNav('about-me')}
                    >
                        About Me
                    </a>
                    <a
                        href="#"
                        className="text-black font-semibold text-lg hover:text-pink-400"
                        onClick={handleClickNav('projects')}
                    >
                        DevVentures
                    </a>
                    <a href="#" onClick={handleClickNav('contact')} className="text-black font-semibold text-lg hover:text-pink-400">
                    Get in Touch
                    </a>
                </div>
            </div>
            {/* Mostrar el menú de hamburguesa en dispositivos móviles */}
            {showMenu && (
                <div className="md:hidden bg-gray-100 p-4">
                    <a
                        href="#"
                        className="block text-black font-semibold text-lg mb-2 hover:text-pink-400"
                        onClick={handleClickNav('about-me')}
                    >
                        About Me
                    </a>
                    <a
                        href="#"
                        className="block text-black font-semibold text-lg mb-2 hover:text-pink-400"
                        onClick={handleClickNav('projects')}
                    >
                        DevVentures
                    </a>
                    <a href="#" className="block text-black font-semibold text-lg hover:text-pink-400">
                        LinkUp
                    </a>
                </div>
            )}
        </div>
    );
};

export default NavBar;
