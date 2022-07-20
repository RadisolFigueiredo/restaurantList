import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

interface ImageProps {
  image?: string;
}

export const BoxHeader = styled.div<ImageProps>`
  ${({ image }) => css`
    height: 187px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 187px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${image});
  `}
`;

export const BoxSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding-top: 30px;
  margin: 0 10%;
`;

export const BoxBack = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Back = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkButton = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const BoxLogo = styled.div`
  border: 1px solid #ffffff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
`;

export const Logo = styled.div<ImageProps>`
  background-image: ${({ image }) => css`
 url(${image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 119px;
  width: 119px;
  height: 119px;
  border-radius: 100px;
  border: 3px solid #ffffff;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 23px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  line-height: 44.8px;
`;

export const Infos = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: #ffffff;
`;

export const Box = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 10% 0 10%;
  align-items: center;
  margin: 0 10%;
`;

export const BoxDescription = styled.div`
  width: 539px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LineDivisor = styled.div`
  margin: 30px 0;
  border: 1px solid #cccccc;
`;

interface Props {
  mTop?: string;
  size?: boolean;
  lineHeight?: boolean;
  colorText?: boolean;
}

export const TextDescription = styled.p<Props>`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.6px;
  color: #333333;
  margin-top: ${({ mTop }) => (mTop ? mTop : '0px')};
`;

export const TextInfos = styled.p<Props>`
  font-weight: 400;
  font-size: ${({ size }) => (size ? '22px' : '16px')};
  line-height: ${({ lineHeight }) => (lineHeight ? '33px' : '24px')};
  color: ${({ colorText }) => (colorText ? '#676666' : '#808080')};
`;
