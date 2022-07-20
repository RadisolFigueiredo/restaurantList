import { useContext } from 'react';
import RestaurantContext from '../../context/restaurants';
import * as S from './styles';

const Home = ({ filteredRestaurant }: any) => {
  const { restaurantList } = useContext(RestaurantContext);

  const data = filteredRestaurant.length ? filteredRestaurant : restaurantList;
  return (
    <S.Container>
      <S.Box>
        <S.BoxCard>
        <S.Title>Restaurantes</S.Title>
          {data?.map((item) => {
            return (
              <S.Card
                to={`/restaurants/${item.id}`}
                state={{ data: item }}
                key={item.id}
              >
                <S.Image image={item.image} />
                <S.TitleCard>{item.name}</S.TitleCard>
              </S.Card>
            );
          })}
        </S.BoxCard>
      </S.Box>
    </S.Container>
  );
};

export default Home;
