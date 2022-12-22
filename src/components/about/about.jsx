import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { BsQuestionLg } from 'react-icons/bs'
import { BsLightbulb } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className="about_me-image">
                        <img src={ME} alt='' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <BsQuestionLg className='about_icon' />
                            <h5>Who Am I</h5>
                            <small>New Aspiring Developer</small>
                        </article>
                        <article className='about_card'>
                            <BsLightbulb className='about_icon' />
                            <h5>Motivation</h5>
                            <small>Baby steps into tech</small>
                        </article>
                        <article className='about_card'>
                            <BsStar className='about_icon' />
                            <h5>Passion</h5>
                            <small>Learning, innovating, and challenging myself</small>
                        </article>
                    </div>

                    <p>
                        I am a BCIT co-op student currently learning C and object oriented programming. I am passionate about learning new things and challenging myself. I am currently looking for a co-op position in the tech industry.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Contact Me!</a>
                </div>
            </div>
        </section>
    )
}

export default About
