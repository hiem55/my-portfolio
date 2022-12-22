import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import Hobbies from './components/hobbies/hobbies'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Hobbies />
            <Contact />
            <Footer />

        </>
    )
}

export default App
