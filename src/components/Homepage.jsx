import React from 'react';
import NavBar from './NavBar'
import Title from './Title';

const Homepage = () => {
    return (
        <div className="bg-purple-500 w-full" id='home'>
            <NavBar/>
            <Title/>
        </div>
    );
};

export default Homepage;
