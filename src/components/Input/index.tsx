import { FocusEventHandler } from 'react';
import * as S from './styles';

interface PropTypes {
  placeholder: string;
  mode?: string;
  type: string;
  name: string;
  onChange: FocusEventHandler<HTMLInputElement>;
}

/**
 * Archive: src/components/Input/index.tsx
 *
 * Description: Input components
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const Input = ({
  placeholder,
  mode,
  type,
  name,
  onChange,
}: PropTypes) => {
  return (
    <S.Input
      placeholder={placeholder}
      mode={mode}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
};
