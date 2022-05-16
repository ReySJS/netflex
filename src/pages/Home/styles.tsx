import styled from 'styled-components';

import DefaultBanner from '../../assets/images/default-banner-background.png';
import AdamBanner from '../../assets/images/adam_project-banner-background.png';
import MatrixBanner from '../../assets/images/matrix-banner-background.png';
import LokiBanner from '../../assets/images/loki-banner-background.png';
import BatmanBanner from '../../assets/images/the_batman-banner-background.png';

export const Conteiner = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface ConteinerTypes {
  name: string;
}

export const Banner = styled.div<ConteinerTypes>`
  width: 100vw;
  height: 70vh;
  display: flex;

  background-image: url(${DefaultBanner});
  background-size: cover;

  ${({ name }) => name === 'adam' && `background-image: url(${AdamBanner})`}
  ${({ name }) => name === 'matrix' && `background-image: url(${MatrixBanner})`}
  ${({ name }) => name === 'loki' && `background-image: url(${LokiBanner})`}
  ${({ name }) => name === 'batman' && `background-image: url(${BatmanBanner})`}
`;

export const Title = styled.h1`
  font-family: 'Newsreader';
  font-weight: 800;
  font-size: 60px;

  color: #ffffff;
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;

  color: #ffffff;
`;

export const Carrousel = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #141414;
`;

export const PageTitle = styled.h2`
  color: #fff;
`;
