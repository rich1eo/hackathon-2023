import { classNames, Modal, ModalTheme } from '@hackathon-2023/client/uikit'

import { EnemyList } from '../EnemyList/EnemyList'

import styles from './EnemyModal.module.css'

interface EnemyModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const EnemyModal = ({ className, isOpen, onClose }: EnemyModalProps) => {
  return (
    <Modal
      className={classNames(styles.Modal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      theme={ModalTheme.Pink}
      lazy
    >
      <EnemyList />
    </Modal>
  )
}
