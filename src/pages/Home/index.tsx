import { useEffect, useState } from 'react';
import { HomeMovieThumbnail } from './MovieThumbnail';
import { api } from '../../services/api';

import * as S from './styles';

interface HandleMovieTypes {
  name: string;
  title: string;
  subtitle: string;
}

interface MovieTypes {
  name: string;
  title: string;
  subtitle: string;
}

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
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movieTitle, setMovieTitle] = useState('(DES)ENCANTO');
  const [movieSubtitle, setMovieSubtitle] = useState(
    'Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara. E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil.',
  );

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const { data } = await api.get('/movies');
        setMovies(data);
        console.log(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleMovie = ({ name, title, subtitle }: HandleMovieTypes) => {
    setSelectedMovie(name);
    setMovieTitle(title);
    setMovieSubtitle(subtitle);
  };

  return (
    <S.Container>
      <S.Banner name={selectedMovie}>
        <S.Title>{movieTitle}</S.Title>
        <S.Subtitle>{movieSubtitle}</S.Subtitle>
      </S.Banner>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <S.Carrousel>
          {movies.map((movie) => (
            <HomeMovieThumbnail
              name={movie.name}
              onClick={() =>
                handleMovie({
                  name: movie.name,
                  title: movie.title,
                  subtitle: movie.subtitle,
                })
              }
            />
          ))}
          <S.PageTitle>Minha Lista</S.PageTitle>
        </S.Carrousel>
      )}
    </S.Container>
  );
};
