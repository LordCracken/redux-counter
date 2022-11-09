import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

import { IState } from './store/storeInterfaces';

const App = () => {
  const isAuth = useSelector((state: IState) => state.auth.isAuth);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
};

export default App;
