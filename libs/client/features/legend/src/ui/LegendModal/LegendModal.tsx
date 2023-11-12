import { classNames, Modal } from '@hackathon-2023/client/uikit'

import { LegendList } from '../LegendList/LegendList'

import styles from './LegendModal.module.css'

interface LegendModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const LegendModal = ({ className, isOpen, onClose }: LegendModalProps) => {
  return (
    <Modal className={classNames(styles.Modal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <LegendList />
    </Modal>
  )
}
