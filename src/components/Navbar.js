import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.Navbar}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}
