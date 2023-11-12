import { classNames, Modal, Text, TextSize, TextTheme } from '@hackathon-2023/client/uikit'

import styles from './RulesModal.module.css'

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const RulesModal = ({ className, isOpen, onClose }: RulesModalProps) => {
  return (
    <Modal className={classNames(styles.Modal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Text
        text="За выбранное время отстреливайте страхи выбранным оружием и создавайте безопасную и поддерживающую среду,  чтобы помочь ребенку расти в сильного и уверенного человека."
        theme={TextTheme.Inverted}
        size={TextSize.M}
        className={styles.rule}
      />
    </Modal>
  )
}
