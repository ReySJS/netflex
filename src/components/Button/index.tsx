import { MouseEventHandler } from 'react';

import * as S from './styles';

interface PropTypes {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'submit' | 'button' | 'reset' | undefined;
}

/**
 * Archive: src/components/Button/index.tsx
 *
 * Description: Button components
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const Button = ({ onClick, children, type }: PropTypes) => {
  return (
    <S.Container onClick={onClick} type={type}>
      {children}
    </S.Container>
  );
};
