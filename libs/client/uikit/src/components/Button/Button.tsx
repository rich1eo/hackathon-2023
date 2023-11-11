import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ButtonTheme {
  Primary = 'primary',
  Green = 'green',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  size?: ButtonSize
  theme?: ButtonTheme
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, size = ButtonSize.M, theme = ButtonTheme.Primary, disabled, ...otherProps } = props

  return (
    <button
      type="button"
      className={classNames(styles.Button, {}, [className, styles[size], styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
})
