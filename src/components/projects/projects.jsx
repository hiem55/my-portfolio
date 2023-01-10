import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Lost Ark Bot",
        github: "https://github.com/hiem55/LostArkBot",
        tech: "Python (Pyautogui, OpenCV, Numpy)",
        demo: null
    },
    {
        id: 2,
        image: IMG2,
        title: "co.Cost Database for information about cost of living near your school",
        github: "https://github.com/maz1995/1800_202230_DTC05",
        tech: "HTML, CSS, Bootstrap, JavaScript, Jquery, Firebase/Firestore, Agile Methodology",
        demo: "https://bcit-dtc05-project.web.app/"
    },
    {
        id: 3,
        image: IMG3,
        title: "League of Legends text Adventure",
        github: "https://github.com/hiem55/comp-1510-a4-justin",
        tech: "Python, Data Structures, Algorithms, Unit tests, Documentation",
        demo: null
    },
    {
        id: 4,
        image: IMG4,
        title: "Discord Bot",
        github: "https://github.com/hiem55/discordbot",
        tech: "Discord API, Python, Git, Github",
        demo: null
    },
]
const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Projects</h5>
            <h2>Projects</h2>

            <div className="container projects_container">
                {
                    data.map(({ id, image, title, github, tech, demo }) => {
                        return (
                            <article key={id} className='project_item'>
                                <div className="project_item-image">
                                    <img src={image} alt="project" />
                                    <h3>{title}</h3>
                                    <h4>Skills</h4>
                                    <p>{tech}</p>
                                    <div className="project_item-cta">
                                        <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                                        <a href={demo} className='btn btn-primary' target="_blank" disabled={data.demo === null} rel="noopener noreferrer">Demo</a>
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
