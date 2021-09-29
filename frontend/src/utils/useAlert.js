import { useContext } from 'react'
import { AlertContext } from './AlertContext'

const useAlert = () => {
  const [alertmodal, setAlertModal, message, setMessage] =
    useContext(AlertContext)

  const openAlertModal = (msg) => {
    setAlertModal(true)
    setMessage(msg)
  }
  const closeAlertModal = () => {
    setAlertModal(false)
    setMessage('')
  }

  return { openAlertModal, closeAlertModal, message, alertmodal }
}

export default useAlert
