import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store';

import { IState } from '../store/storeInterfaces';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector((state: IState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const nav = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && nav}
    </header>
  );
};

export default Header;
