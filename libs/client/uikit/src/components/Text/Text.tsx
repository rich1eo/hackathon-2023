import { memo } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import styles from './Text.module.css'

export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

export enum TextTheme {
  Primary = 'primary',
  Inverted = 'inverted',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.Primary, align = TextAlign.Left, size = TextSize.M } = props

  return (
    <div className={classNames(styles.Text, {}, [className, styles[theme], styles[align], styles[size]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
})
