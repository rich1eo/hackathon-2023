import { memo } from 'react'

import { classNames } from '@hackathon-2023/client/uikit'

// import { legend } from '../../model/legend'
import styles from './LegendList.module.css'

interface LegendListProps {
  className?: string
}

export const legend = [
  {
    src: '',
    title: 'Взрослые люди',
  },
  {
    src: '../../../../enemy/src/model/assets/being-ridiculed.png',
    title: 'Боязнь быть осмеянным, выделиться',
  },
  {
    src: '../../../../enemy/src/model/assets/betrayal.png',
    title: 'Предательство',
  },
  {
    src: '../../../../enemy/src/model/assets/darkness.png',
    title: 'Темнота',
  },
  {
    src: '../../../../enemy/src/model/assets/doctors.png',
    title: 'Врачи',
  },
  {
    src: '../../../../enemy/src/model/assets/guardianship.png',
    title: 'Боязнь, что органы опеки заберут',
  },
  {
    src: '../../../../enemy/src/model/assets/loneliness.png',
    title: 'Одиночество',
  },
  {
    src: '../../../../enemy/src/model/assets/mom-disappear.png',
    title: 'Боязнь, что мама исчезнет',
  },
  {
    src: '../../../../enemy/src/model/assets/new-places.png',
    title: 'Новые места',
  },
  {
    src: '../../../../enemy/src/model/assets/unusual.png',
    title: 'Непривычное, что подрывает ожидания',
  },
  {
    src: '../../../../enemy/src/model/assets/violence.png',
    title: 'Насилие',
  },
]

export const LegendList = memo(({ className }: LegendListProps) => {
  return (
    <div className={classNames(styles.LegendList, {}, [className])}>
      {legend.map((fear) => (
        <div key={fear.title}>
          <img src={fear.src} alt={fear.title} />
          <label>{fear.title}</label>
        </div>
      ))}
    </div>
  )
})
