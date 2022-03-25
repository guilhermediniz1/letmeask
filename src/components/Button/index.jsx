import React from 'react'

import {ButtonComponent} from './styles'

export function Button({isOutlined = false, ...props}) {
  return (
    <ButtonComponent className={`button ${isOutlined ? 'outlined' : ''}`} {...props}></ButtonComponent>
  )
}
