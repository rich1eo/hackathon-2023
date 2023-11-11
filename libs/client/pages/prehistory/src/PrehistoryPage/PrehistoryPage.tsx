import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import firstImage from './assets/first.png'
import secondImage from './assets/second.png'
import thirdImage from './assets/third.png'
import { StoryScreen } from './components/StoryScreen/StoryScreen'

import styles from './PrehistoryPage.module.css'

/* eslint-disable-next-line */
export interface PrehistoryPageProps {}

export const PrehistoryPage = (props: PrehistoryPageProps) => {
  const [storyStep, setStoryStep] = useState(0)
  const navigate = useNavigate()

  const onClickNextStep = useCallback(() => {
    setStoryStep((prev) => prev + 1)
  }, [])

  const onWeaponChoosepage = useCallback(() => {
    navigate('/weapon-choose')
  }, [])

  const HistoryPart = useMemo(() => {
    switch (storyStep) {
      case 0:
        return (
          <StoryScreen
            onClickNextStep={onClickNextStep}
            image={firstImage}
            text="Мария и Алексей долгие годы мечтали о ребенке. Наконец, они прошли школу приемных родителей и смоглить встретить свего сына, Ваню, в детском доме. День, когда они забрали его домой, был наполнен смехом и радостью. Ваня, мальчик с яркими глазами и застенчивой улыбкой, впервые чувствовал, что у него есть настоящая семья."
            background="#FFE8C3"
          />
        )
      case 1:
        return (
          <StoryScreen
            onClickNextStep={onClickNextStep}
            image={secondImage}
            text='Вместе с сыном в их дом пришли его "коробки" - невидимые, но ощутимые. В каждой коробке были его страхи: страх темноты, страх одиночества и другие. Эти страхи часто заставляли мальчика прятаться в углах или плакать ночами. Мария и Алексей были озадачены, но не сдавались.'
            background="#010D15"
          />
        )
      case 2:
        return (
          <StoryScreen
            onClickNextStep={onWeaponChoosepage}
            image={thirdImage}
            text="Родители поняли, что им нужно вооружиться необычным оружием: вниманием, заботой, пониманием и терпением. Они проводили время с сыном, читали ему сказки, объясняли, что бояться - это нормально, и что теперь он не один. Вооружитесь и вы этим оружием, чтобы помочь Ване победить его страхи."
            background="#FFFFFF"
          />
        )
      default:
        return (
          <StoryScreen
            onClickNextStep={onClickNextStep}
            image={firstImage}
            text="Мария и Алексей долгие годы мечтали о ребенке. Наконец, они прошли школу приемных родителей и смоглить встретить свего сына, Ваню, в детском доме. День, когда они забрали его домой, был наполнен смехом и радостью. Ваня, мальчик с яркими глазами и застенчивой улыбкой, впервые чувствовал, что у него есть настоящая семья."
            background="#FFFDE2"
          />
        )
    }
  }, [storyStep])
  return <div className={styles.PrehistoryPage}>{HistoryPart}</div>
}

export default PrehistoryPage
