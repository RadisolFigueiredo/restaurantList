import { createContext, ReactNode, useState } from 'react';

export type RestaurantType = {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
};

interface RestaurantContextType {
  restaurantList: RestaurantType[];
  setRestaurantList: (restaurants: RestaurantType[]) => void;
}

interface PropsRestaurantContext {
  children: ReactNode;
}

const initialState: RestaurantType[] = [];

const RestaurantContext = createContext<RestaurantContextType>({
  restaurantList: initialState,
  setRestaurantList: (restaurants: RestaurantType[]) => {},
});

const RestaurantContextProvider = ({ children }: PropsRestaurantContext) => {
  const [restaurantList, setRestaurantList] =
    useState<RestaurantType[]>(initialState);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantList,
        setRestaurantList,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContextProvider };
export default RestaurantContext;
