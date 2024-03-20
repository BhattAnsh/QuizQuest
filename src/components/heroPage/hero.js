import React from 'react';
import '../heroPage/hero.css';
import heroImage from '../../media/hero2.svg';
import BtnP from '../Button/primaryButton';
import BtnS from '../Button/secButton';

function Hero() {
    return (
        <>
            <section className='heroPageContainer'>
                <section>
                    <div className='heroText'>
                        <div className='text-container'>
                            <div className='upperText'>Quiz</div>
                            <div className='lowerText'>Quest</div>
                            <br></br>
                            <div className='heroAbout'>
                                <p className='aboutPara'>Quiz Quest is your one-stop destination for creating, hosting, and joining exciting quizzes. Whether you're a trivia master looking to challenge your friends or a newcomer eager to test your knowledge, our platform has something for everyone.So what are you waiting for? Start your quiz journey with Quiz Quest today!</p>
                            </div>
                        </div>
                        <div className='button-container'>
                            <BtnP name="Create Quiz"></BtnP>
                            <BtnS name="Join Quiz"></BtnS>
                        </div>
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