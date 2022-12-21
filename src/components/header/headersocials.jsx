import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const headersocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://linkedin.com' targe="_blank"><BsLinkedin /></a>
            <a href='https://github.com' targe="_blank"><BsGithub /></a>
        </div>
    )
}

export default headersocials
