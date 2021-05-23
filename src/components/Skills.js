import React from 'react'
import PageHeader from './PageHeader'
import style from './Skills.module.css'
import skillsTitle from '../images/skills-title.svg'

export default function Skills() {
  const designSkills = (
    <dl>
      <dt>Design Skills</dt>
      <dd>Phoroshop</dd>
      <dd>Illustrator</dd>
      <dd>Adobe XD(UI/UX Design)</dd>
    </dl>
  )

  const frontendSkills = (
    <dl>
      <dt>FrontEnd Skills</dt>
      <dd>HTML</dd>
      <dd>CSS - SASS - BootStrap</dd>
      <dd>JavaScript &amp; jQuery</dd>
      <dd>ReactJS</dd>
    </dl>
  )

  const otherSkills = (
    <dl>
      <dt>Other Skills</dt>
      <dd>Git</dd>
      <dd>PPT</dd>
      <dd>Open Mind</dd>
    </dl>
  )

  return (
    <section className={style.skills}>
      <div className="container">
        <PageHeader title='My Skills' />
        <p className={style.text}>
          UI/UX 엔지니어링 분야는 디자인, 설계와 프로그래밍 능력이 요구되는 분야입니다. 저는 이 분야에 대한 열정을 꾸준히 가지고 공부하고 있습니다. 다음은 제가 공부하고 있는 프로그래밍 언어 및 라이브러리, 프레임워크들입니다. 특히 기본기를 탄탄히 하여 관련 분야에서 잘 적응하고 역량을 펼칠 수 있는 전문가가 되기를 바랍니다.
        </p>
        <figure>
          <img className={style.skillsImg} src={skillsTitle} alt="skills title" />
        </figure>
        <div className={style.skillContainer}>
          {designSkills}
          {frontendSkills}
          {otherSkills}
        </div>
      </div>
    </section>
  )
}
