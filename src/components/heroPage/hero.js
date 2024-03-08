import React from 'react';
import '../heroPage/hero.css'
import heroImage from '../../media/hero.png'
function Hero() {
    return (
        <>
            <section className='heroPageContainer'>
                <section>
                    <div className='heroText'>
                        <div className='upperText'>Quiz</div>
                        <div className='lowerText'>Quest</div>
                    </div>
                    <div className='heroImgContainer'>
                        <img src={heroImage} alt='hero' className='heroImage'></img>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Hero