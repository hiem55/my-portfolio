import React from 'react'
import './hobbies.css'
import { BsCheckLg } from 'react-icons/bs'

const Hobbies = () => {
    return (
        <section id='hobbies'>
            <h5>What are my interests</h5>
            <h2>Hobbies</h2>

            <div className="container hobbies_container">
                <article className='hobby'>
                    <div className='hobby_head'>
                        <h3> Music </h3>
                    </div>
                    <ul className='hobby_list'>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Pop</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Rap</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Lo-Fi</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Korean pop</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Korean rap</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Anime songs</p>
                        </li>
                    </ul>
                </article>
                {/* End of Music */}
                <article className='hobby'>
                    <div className='hobby_head'>
                        <h3> Stocks </h3>
                    </div>
                    <ul className='hobby_list'>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Keeping up with stock trends</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Observing S&P 500 movement</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Following important financial regulations</p>
                        </li>
                    </ul>
                </article>
                {/* End of Stocks */}
                <article className='hobby'>
                    <div className='hobby_head'>
                        <h3> Gaming </h3>
                    </div>
                    <ul className='hobby_list'>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>League of Legends</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Teamfight Tactics</p>
                        </li>
                        <li>
                            <BsCheckLg className='hobby_list-icon' />
                            <p>Apex Legends</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Hobbies
