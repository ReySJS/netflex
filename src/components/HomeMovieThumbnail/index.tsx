import { MouseEventHandler } from 'react';
import * as S from './styles';

interface PropTypes {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

/**
 * Archive: src/pages/Login/index.tsx
 *
 * Description: Login page
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const HomeMovieThumbnail = ({ name, onClick }: PropTypes) => {
  return <S.Conteiner name={name} onClick={onClick}></S.Conteiner>;
};
