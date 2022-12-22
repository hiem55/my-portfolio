import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>Technical Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">

                {/* Frontend */}

                <div className="experience_frontend">
                    <h3>Languages and Tools</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>Google Firebase/Firestore</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineCheckCircle className='experience_details-icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
