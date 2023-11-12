import { memo } from 'react'

import { classNames } from '@hackathon-2023/client/uikit'

import adults from '../../model/assets/adults.png'
import beingRidiculed from '../../model/assets/being-ridiculed.png'
import betrayal from '../../model/assets/betrayal.png'
import darkness from '../../model/assets/darkness.png'
import doctors from '../../model/assets/doctors.png'
import guardianship from '../../model/assets/guardianship.png'
import loneliness from '../../model/assets/loneliness.png'
import momDisappear from '../../model/assets/mom-disappear.png'
import newPlaces from '../../model/assets/new-places.png'
import unusual from '../../model/assets/unusual.png'
import violence from '../../model/assets/violence.png'

import styles from './EnemyList.module.css'

interface LegendListProps {
  className?: string
}

export const legend = [
  {
    src: adults,
    title: 'Взрослые люди',
  },
  {
    src: beingRidiculed,
    title: 'Боязнь быть осмеянным, выделиться',
  },
  {
    src: betrayal,
    title: 'Предательство',
  },
  {
    src: darkness,
    title: 'Темнота',
  },
  {
    src: doctors,
    title: 'Врачи',
  },
  {
    src: guardianship,
    title: 'Боязнь, что органы опеки заберут',
  },
  {
    src: loneliness,
    title: 'Одиночество',
  },
  {
    src: momDisappear,
    title: 'Боязнь, что мама исчезнет',
  },
  {
    src: newPlaces,
    title: 'Новые места',
  },
  {
    src: unusual,
    title: 'Непривычное, что подрывает ожидания',
  },
  {
    src: violence,
    title: 'Насилие',
  },
]

export const EnemyList = memo(({ className }: LegendListProps) => {
  return (
    <div className={classNames(styles.LegendList, {}, [className])}>
      {legend.map((fear) => (
        <div key={fear.title} className={styles.card}>
          <img src={fear.src} alt={fear.title} />
          <p className={styles.title}>{fear.title}</p>
        </div>
      ))}
    </div>
  )
})
