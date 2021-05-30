import React from 'react'
import PageHeader from './PageHeader'
import style from './Portfolio.module.css'


export default function Portfolio() {
  const lists = [
    {
      title: 'Portfolio 1',
      link: '#',
      imgUrl: 'https://placeimg.com/400/400/tech/1',
    },
    {
      title: 'Portfolio 2',
      link: '#',
      imgUrl: 'https://placeimg.com/400/400/tech/2',
    },
    {
      title: 'Portfolio 3',
      link: '#',
      imgUrl: 'https://placeimg.com/400/400/tech/3',
    },
  ]

  return (
    <section className={style.portfolio}>
      <div className="container">
      <PageHeader title='Portfolio' />
        <ul className={style.list}>
          {
            lists.map((list, key) => {
              return (
                <li key={key}>
                  <a href={list.link}>
                    <img src={list.imgUrl} alt={list.title} />
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
