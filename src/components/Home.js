import React from 'react'
import style from './Home.module.css'
import homeTitle from '../images/home-title.svg'

export default function Home() {
  return (
    <section className={style.home}>
      <div className={`${style.container} container`}>
        <div className={style.titleContainer}>
          <div className={style.headerGroup}>
            <h1 className={style.title}>Welcome Home</h1>
            <p>꾸준히 성장하는 <br></br>웹 디자인/프론트엔드 개발자</p>
          </div>
        </div>
        <figure>
          <img src={homeTitle} alt="home title" />
        </figure>
      </div>
    </section>
  )
}
