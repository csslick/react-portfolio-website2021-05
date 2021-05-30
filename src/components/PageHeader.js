import React from 'react'
import style from './PageHeader.module.css'

export default function PageHeader({title}) {
  return (
    <header className={style.pageHeader}>
      <h1>{title}</h1>
    </header>
  )
}
