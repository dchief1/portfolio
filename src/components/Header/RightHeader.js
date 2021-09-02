import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import {  Div2, Div3, NavLink, SocialIcons, } from './HeaderStyles'

const RightHeader = () => {
    return (
        <>
            <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/dchief1">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/emmanuel-igwesi-7b07461b2/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/_Dchief">
        <AiFillTwitterCircle size="2rem" />
      </SocialIcons>
    </Div3> 
        </>
    )
}

export default RightHeader
