const {createContext, useState, useContext} = require('react');

const AppContext = createContext();

const restaurantImage = require('../assets/images/bg.jpeg');
const foodImage = require('../assets/images/food.jpeg');

const initialData = [
  {
    title: 'Chinese Food',
    restaurant: 'Chinese Hut',
    price: '25',
    image: foodImage,
  },
  {
    title: 'Chinese Food 2',
    restaurant: 'Chinese Hut',
    price: '25',
    image: foodImage,
  },
  {
    title: 'Chinese Food 3',
    restaurant: 'Chinese Hut',
    price: '25',
    image: foodImage,
  },
  {
    title: 'Chinese Food 4',
    restaurant: 'Chinese Hut',
    price: '25',
    image: foodImage,
  },
];

const AppProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [data, setData] = useState(initialData);

  return (
    <AppContext.Provider value={{user, setData, data, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useApp = () => useContext(AppContext);
