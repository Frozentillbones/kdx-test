import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import duck from '../images/png/duck.png';
import useActions from './hooks/useActions';
import carsActions from './store/actions/async/carsFetcher';

const App = () => {

  const { isFetching, error, cars } = useSelector(({cars}) => cars);
  const dispatch = useDispatch();
  const fetchCars = useActions(carsActions, dispatch);

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__top">
          <h1><img src={duck} alt="duck"/></h1>
        </div>
        <div className="header__bottom">
          <p>¡Ay Caramba</p>
        </div>
      </header>
      <main className="main">

      </main>
      <footer className="footer">
        <p className="footer__copyright">
          <span>© 2015 CAPTAIN QUACK</span>
          <span>Десница тысячелетия и моллюск!</span>
        </p>
      </footer>
    </>
  );
};

export default App;