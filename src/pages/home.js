import React from 'react';
import Hero from '../Components/Hero';
import Tutorial from '../Components/Tutorial';

const home = () => {
    return (
        <div className='pt-20 text-black'>
            <Hero />
            <Tutorial />
        </div>
    );
};

export default home;