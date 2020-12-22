import React from 'react';
import HeroSection from '../../HeroSection1';
import { homeObjThree } from './Data';

function GenCard() {
    return (
        <>
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default GenCard;