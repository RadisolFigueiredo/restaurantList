import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 20%;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  margin: 30px 6%;
  width: 100%;
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Card = styled(Link)`
  width: 350px;
  height: 170px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 350px;
  margin-bottom: 30px;
  cursor: pointer;
`;

interface ImageProps {
  image?: string;
}

export const Image = styled.div<ImageProps>`
  ${({ image }) => css`
    width: 350px;
    height: 170px;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 170px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${image});
  `}
`;

export const TitleCard = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 136px;
  margin-left: 10px;
  position: absolute;
`;
