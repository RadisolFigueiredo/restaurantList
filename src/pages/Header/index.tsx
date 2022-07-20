import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantContext from '../../context/restaurants';
import { api } from '../../services/api';
import Home from '../Home';

import * as S from './styles';

const Header = () => {
  const [search, setSearch] = useState<string>('');
  const [filteredRestaurant, setFilteredRestaurant] = useState<any>([]);

  const { setRestaurantList, restaurantList } = useContext(RestaurantContext);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`restaurants?page=1&limit=10`)
      .then(({ data }) => {
        setRestaurantList(data.data);
      })
      .catch((err) => {
        console.log('Error ===> ', err);
        setRestaurantList([]);
      });
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const filterList = restaurantList.filter((item) => {
      if (item.name.toUpperCase() === search.toUpperCase()) {
        return item;
      }
    });
    setFilteredRestaurant(filterList);
  }

  return (
    <>
      <S.Container>
        <S.BoxHeader>
          <S.BoxLogo to={'/'} onClick={() => navigate('/')}>
            <S.Logo />
          </S.BoxLogo>
          <S.BoxText>
            <S.Title>Descubra novos sabores</S.Title>
            <S.SubTitle>
              Aqui eu converso com você sobre nossa proposta
            </S.SubTitle>
          </S.BoxText>
        </S.BoxHeader>
        <S.BoxSearch>
          <S.Search onSubmit={handleSubmit}>
            <S.IconSearch />
            <S.Input
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Encontre um restaurante"
              onChange={(e) => setSearch(e.target.value)}
            />
          </S.Search>
        </S.BoxSearch>
      </S.Container>
      <Home filteredRestaurant={filteredRestaurant} />
    </>
  );
};

export default Header;
