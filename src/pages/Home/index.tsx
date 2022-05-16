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
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movieTitle, setMovieTitle] = useState('(DES)ENCANTO');
  const [movieSubtitle, setMovieSubtitle] = useState(
    'Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara. E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil.',
  );

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get('/movies');
      setMovies(data);
      console.log(data);
    };
    getData();
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
        <button onClick={() => setSelectedMovie('reload')}>Recarregar</button>
      </S.Banner>

      <S.Carrousel>
        <S.PageTitle>Minha Lista</S.PageTitle>

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
      </S.Carrousel>
    </S.Container>
  );
};
