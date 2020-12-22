import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Pics from './pages/GenCard/Pics'

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonGenerate,
    img,
    alt,
    imgStart
}) {
    const [cardGenerated, setCardGenerated] = React.useState(0)
    console.log(cardGenerated)
    const handleClick = () => {
        setCardGenerated(cardGenerated + 1)
    }

    const renderCard = () => {
        if (cardGenerated != 0) {
            return <Pics id={cardGenerated} />
        }
        return (
            <div className='col'>
                <div className='home__hero-img-wrapper'>
                    <img src={img} alt={alt} className='home__hero-img' />
                </div>
            </div>
        )
    }

    return (
        <>
            <div
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                {renderCard()}
                                <Button onClick={handleClick} buttonSize='btn--wide' buttonColor='blue'>
                                    {buttonGenerate}
                                </Button>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
