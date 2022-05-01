import React from 'react';
import Hero from '../Components/Hero';
import Tutorial from '../Components/Tutorial';
import Unifyforwho from '../Components/Unifyforwho';

const home = () => {
    return (
        <div className='pt-20 text-black'>
            <Hero />
            <Tutorial />
            <Unifyforwho />
        </div>
    );
};

export default home;