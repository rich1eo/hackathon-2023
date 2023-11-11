import { Button, ButtonSize, ButtonTheme, Card, Text, TextAlign, TextTheme } from '@hackathon-2023/client/uikit'

import Toys from '../assets/toys.svg'

import styles from './StartPage.module.css'

/* eslint-disable-next-line */
export interface StartPageProps {}

const timeMods = [
  {
    label: '00:30',
    time: 30000,
  },
  {
    label: '01:00',
    time: 60000,
  },
  {
    label: '02:00',
    time: 120000,
  },
  {
    label: '05:00',
    time: 300000,
  },
  {
    label: 'Бесконечная игра',
    time: '',
  },
]

export const StartPage = (props: StartPageProps) => {
  return (
    <div className={styles.StartPage}>
      <header className={styles.header}>
        <Text title="Сильнее страхов" align={TextAlign.Center} />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <Text text="Ребенок, усыновлённый приёмными родителями, имеет свои страхи, с которыми нужно помочь ему справиться." />
          <Card className={styles.timeCard}>
            <Text text="Выберите время игры:" theme={TextTheme.Inverted} />
            <div className={styles.timeList}>
              {timeMods.map((mod) => (
                <Button key={mod.label}>{mod.label}</Button>
              ))}
            </div>
          </Card>
          <Button size={ButtonSize.L}>Старт</Button>
        </div>
        <Toys />
        <Button className={styles.fearsBtn}>Страхи</Button>
        <Button className={styles.rulesBtn} theme={ButtonTheme.Green}>
          Правила
        </Button>
      </main>
    </div>
  )
}

export default StartPage
