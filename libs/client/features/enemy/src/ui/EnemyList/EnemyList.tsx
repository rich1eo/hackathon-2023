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

import attentionWeakImage from '../../model/assets/attention-weak.png'
import careWeakImage from '../../model/assets/care-weak.png'
import understandingWeakImage from '../../model/assets/understanding-weak.png'
import patienceWeakImage from '../../model/assets/patience-weak.png'

import styles from './EnemyList.module.css'

interface LegendListProps {
  className?: string
}

export const legend = [
  {
    src: adults,
    title: 'Взрослые люди',
    weakImage: patienceWeakImage,
  },
  {
    src: beingRidiculed,
    title: 'Боязнь быть осмеянным, выделиться',
    weakImage: careWeakImage,
  },
  {
    src: betrayal,
    title: 'Предательство',
    weakImage: understandingWeakImage,
  },
  {
    src: darkness,
    title: 'Темнота',
    weakImage: patienceWeakImage,
  },
  {
    src: doctors,
    title: 'Врачи',
    weakImage: careWeakImage,
  },
  {
    src: guardianship,
    title: 'Боязнь, что органы опеки заберут',
    weakImage: understandingWeakImage,
  },
  {
    src: loneliness,
    title: 'Одиночество',
    weakImage: attentionWeakImage,
  },
  {
    src: momDisappear,
    title: 'Боязнь, что мама исчезнет',
    weakImage: attentionWeakImage,
  },
  {
    src: newPlaces,
    title: 'Новые места',
    weakImage: attentionWeakImage,
  },
  {
    src: unusual,
    title: 'Непривычное, что подрывает ожидания',
    weakImage: understandingWeakImage,
  },
  {
    src: violence,
    title: 'Насилие',
    weakImage: careWeakImage,
  },
]

export const EnemyList = memo(({ className }: LegendListProps) => {
  return (
    <div className={classNames(styles.LegendList, {}, [className])}>
      {legend.map((fear) => (
        <div key={fear.title} className={styles.card}>
          <img src={fear.src} alt={fear.title} />
          <p className={styles.title}>{fear.title}</p>
          <img src={fear.weakImage} alt="weak" className={styles.weakImage} />
        </div>
      ))}

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <img src={attentionWeakImage} alt="weak" className={styles.weakness} />
          <p className={styles.weaknessText}>— уязвимость к "Вниманию"</p>
        </div>

        <div className={styles.infoItem}>
          <img src={careWeakImage} alt="weak" className={styles.weakness} />
          <p className={styles.weaknessText}>— уязвимость к "Заботе"</p>
        </div>

        <div className={styles.infoItem}>
          <img src={understandingWeakImage} alt="weak" className={styles.weakness} />
          <p className={styles.weaknessText}>— уязвимость к "Пониманию"</p>
        </div>

        <div className={styles.infoItem}>
          <img src={patienceWeakImage} alt="weak" className={styles.weakness} />
          <p className={styles.weaknessText}>— уязвимость к "Терпению"</p>
        </div>
      </div>
    </div>
  )
})
