/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { MdOutlineMessage } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook /></a>
            <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
        </nav>
    )
}

export default Nav
