import { useState } from 'react'
import { HomeMovieThumbnail } from '../../components/HomeMovieThumbnail'

import * as S from './styles'

/**
 * Archive: src/pages/Home/index.tsx
 *
 * Description: Home page
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState('')
  const [movieTitle, setMovieTitle] = useState('(DES)ENCANTO')
  const [movieSubtitle, setMovieSubtitle] = useState(
    'Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara. E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil.',
  )

  interface HandleMovieTypes {
    name: string
    title: string
    subtitle: string
  }

  const handleMovie = ({ name, title, subtitle }: HandleMovieTypes) => {
    setSelectedMovie(name)
    setMovieTitle(title)
    setMovieSubtitle(subtitle)
  }

  return (
    <S.Conteiner>
      <S.Banner name={selectedMovie}>
        <S.Title>{movieTitle}</S.Title>
        <S.Subtitle>{movieSubtitle}</S.Subtitle>
      </S.Banner>

      <S.Carrousel>
        <S.PageTitle>Minha Lista</S.PageTitle>
        <HomeMovieThumbnail
          name="adam"
          onClick={() =>
            handleMovie({
              name: 'adam',
              title: 'Nome qualquer',
              subtitle: 'Adam Subtitle',
            })
          }
        />
        <HomeMovieThumbnail
          name="matrix"
          onClick={() =>
            handleMovie({
              name: 'matrix',
              title: 'Matrix Title',
              subtitle: 'Matrix Subtitle',
            })
          }
        />
        <HomeMovieThumbnail
          name="loki"
          onClick={() =>
            handleMovie({
              name: 'loki',
              title: 'Loki Title',
              subtitle: 'Loki Subtitle',
            })
          }
        />
        <HomeMovieThumbnail
          name="batman"
          onClick={() =>
            handleMovie({
              name: 'batman',
              title: 'Batman Title',
              subtitle: 'Batman Subtitle',
            })
          }
        />
      </S.Carrousel>
    </S.Conteiner>
  )
}
