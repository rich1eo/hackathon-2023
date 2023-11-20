import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import Close from '../../assets/close.svg'
import Restart from '../../assets/restart.svg'
import Share from '../../assets/share.svg'
import Stop from '../../assets/stop.svg'
import Telegram from '../../assets/telegram.svg'
import Twitter from '../../assets/twitter.svg'
import Vk from '../../assets/vk.svg'
import { classNames } from '../../lib/classNames/classNames'

import styles from './Button.module.css'

export enum ButtonTheme {
  Primary = 'primary',
  Green = 'green',
  Yellow = 'yellow',
  Orange = 'orange',
  Close = 'close',
  Share = 'share',
  Twitter = 'twitter',
  Telegram = 'telegram',
  Vk = 'vk',
  Restart = 'restart',
  Stop = 'stop',
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
  if (theme === ButtonTheme.Twitter) {
    return (
      <button type="button" className={classNames(styles.shareBtn, {}, [className])} {...otherProps}>
        <Twitter />
      </button>
    )
  }

  if (theme === ButtonTheme.Telegram) {
    return (
      <button type="button" className={classNames(styles.shareBtn, {}, [className])} {...otherProps}>
        <Telegram />
      </button>
    )
  }

  if (theme === ButtonTheme.Vk) {
    return (
      <button type="button" className={classNames(styles.shareBtn, {}, [className])} {...otherProps}>
        <Vk />
      </button>
    )
  }

  if (theme === ButtonTheme.Restart) {
    return (
      <button type="button" className={classNames(styles.restartBtn, {}, [className])} {...otherProps}>
        <Restart />
      </button>
    )
  }

  if (theme === ButtonTheme.Stop) {
    return (
      <button type="button" className={classNames(styles.stopBtn, {}, [className])} {...otherProps}>
        <Stop />
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
