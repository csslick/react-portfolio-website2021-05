import React from 'react'
import style from './About.module.css'
import PageHeader from './PageHeader'
import profile from '../images/profile.jpg'

export default function About() {
  return (
    <section className={style.about} id="about">
      <div className="container">
        <PageHeader title='About Me' />
        <div className={style.articleContainer}>
          <article>
              <h2>안녕하세요? 저는 홍길동이라고 합니다.</h2>
              <p>장식하는 충분히 인생의 거친 뜨거운지라, 얼음이 사는가 끓는다. 주는 맺어, 생명을 밝은 관현악이며, 지혜는 위하여, 우리 뿐이다. 같지 눈에 설산에서 청춘의 설레는 있으랴? 그들의 붙잡아 과실이 황금시대의 없으면 대중을 영락과 새 피다.</p>
          </article>
          <figure>
            <img src={profile} alt="profile" />
          </figure>
        </div>
      </div>
    </section>
  )
}
