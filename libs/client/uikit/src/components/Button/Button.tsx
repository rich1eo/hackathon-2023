import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import Close from '../../assets/close.svg'
import Share from '../../assets/share.svg'
import { classNames } from '../../lib/classNames/classNames'

import styles from './Button.module.css'

export enum ButtonTheme {
  Primary = 'primary',
  Green = 'green',
  Yellow = 'yellow',
  Orange = 'orange',
  Close = 'close',
  Share = 'share',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  size?: ButtonSize
  theme?: ButtonTheme
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, size = ButtonSize.M, theme = ButtonTheme.Primary, disabled, ...otherProps } = props

  if (theme === ButtonTheme.Close) {
    return (
      <button type="button" className={classNames(styles.closeBtn, {}, [className])} {...otherProps}>
        <Close />
      </button>
    )
  }

  if (theme === ButtonTheme.Share) {
    return (
      <button type="button" className={classNames(styles.shareBtn, {}, [className])} {...otherProps}>
        <Share />
      </button>
    )
  }

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
