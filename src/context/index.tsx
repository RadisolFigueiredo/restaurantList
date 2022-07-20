import { RestaurantContextProvider } from './restaurants';

const GlobalContext = ({ children }: any) => {
  return <RestaurantContextProvider>{children}</RestaurantContextProvider>;
};

export default GlobalContext;
