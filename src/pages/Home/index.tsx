import { useContext } from 'react';
import RestaurantContext from '../../context/restaurants';
import * as S from './styles';

const Home = ({ filteredRestaurant }: any) => {
  const { restaurantList } = useContext(RestaurantContext);

  const data = filteredRestaurant.length ? filteredRestaurant : restaurantList;

  const title = filteredRestaurant.length ? 'Resultados' : 'Restaurantes';

  return (
    <S.Container>
      <S.Box>
        <S.BoxTitle>
          <S.Title>{title}</S.Title>
          {title === 'Resultados' && (
            <S.BoxTitle>
              <S.BoxResultSearch>
                <S.TextResult>Resultados para</S.TextResult>
                <S.TextTerm>Termo pesquisado</S.TextTerm>
              </S.BoxResultSearch>
            </S.BoxTitle>
          )}
        </S.BoxTitle>
        <S.BoxCard>
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
