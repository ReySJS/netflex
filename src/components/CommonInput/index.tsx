import { FocusEventHandler } from 'react'
import * as S from './styles'

interface PropTypes {
  placeholder: string
  mode?: string
  type: string
  name: string
  onBlur: FocusEventHandler<HTMLInputElement>
}

/**
 * Archive: src/pages/Commonnput/index.tsx
 *
 * Description: Login page
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const CommonInput = ({
  placeholder,
  mode,
  type,
  name,
  onBlur,
}: PropTypes) => {
  return (
    <S.Input
      placeholder={placeholder}
      mode={mode}
      type={type}
      name={name}
      onBlur={onBlur}
    />
  )
}
