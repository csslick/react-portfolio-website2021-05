import React from 'react'
import { FaYoutube, FaGithub, FaBloggerB} from 'react-icons/fa';
import style from './Contact.module.css'

export default function Contact() {
  return (
    <section className={style.contact} id="contact">
      <div className="container">
        <div className={style.icons}>
          <a href="http://naver.com" target="_blank">
            <FaYoutube color="white" size="30" />
          </a>
          <a href="http://naver.com" target="_blank">
            <FaGithub color="white" size="30" />
          </a>
          <a href="http://naver.com" target="_blank">
            <FaBloggerB color="white" size="30" />
          </a>
        </div>
      </div>
    </section>
  )
}
