import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
  const history = useHistory()
  const handleBackButtonClick = () => {
    history.goBack()
  }
  return (
    <IconButton onClick={handleBackButtonClick} color="primary" style={{ marginRight: 20 }}>
      <ArrowBackIcon />
    </IconButton>
  )
}
