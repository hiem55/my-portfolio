import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Lost Ark Bot",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 2,
        image: IMG2,
        title: "co.Cost Database for information about cost of living near your school",
        github: "https://github.com",
        demo: "https://github.com"
    },
    {
        id: 3,
        image: IMG3,
        title: "League of Legends text Adventure",
        github: "https://github.com",
        demo: "https://github.com"
    },
]
const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Projects</h5>
            <h2>Projects</h2>

            <div className="container projects_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='project_item'>
                                <div className="project_item-image">
                                    <img src={image} alt="project" />
                                    <h3>{title}</h3>
                                    <div className="project_item-cta">
                                        <a href={github} className='btn' target='_blank'>Github</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>

                                </div>
                            </article>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default Projects
