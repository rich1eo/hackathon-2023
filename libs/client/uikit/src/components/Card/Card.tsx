import { memo, ReactNode } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = memo(({ children, className }: CardProps) => {
  return <div className={classNames(styles.Card, {}, [className])}>{children}</div>
})
