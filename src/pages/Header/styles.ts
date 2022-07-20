import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/images/backgroundHeader.png';
import LogoImage from '../../assets/images/logo.png';
import SearchIcon from '../../assets/images/search.png';

export const Container = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 375px;
  height: 375px;
  width: 100%;
`;

export const BoxHeader = styled.div`
  padding-top: 37px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const BoxLogo = styled(Link)``;

export const Logo = styled.img.attrs({
  src: `${LogoImage}`,
})`
  width: 87px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: #141414;
  margin-bottom: 6px;
`;

export const SubTitle = styled.h5`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  text-align: right;
  color: #676666;
  width: 320px;
  flex-wrap: wrap;
`;

export const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 134px;
`;

export const IconSearch = styled.img.attrs({
  src: `${SearchIcon}`,
  alt: 'Search Icon',
})`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 13px 9px 13px 20px;
`;

export const Search = styled.form`
  width: 540px;
  height: 50px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 15px;
  padding-left: 54px;
  border: none;
  font-weight: 400;
`;
