import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import duck from '../images/png/duck.png';
import useActions from './hooks/useActions';
import carsActions from './store/actions/async/carsFetcher';
import List from './components/List/List';
import Form from './components/Form/Form';

const App = () => {

  const { isFetching, error, cars } = useSelector(({cars}) => cars);

  const [items, setItems] = useState(cars);

  const dispatch = useDispatch();
  const fetchCars = useActions(carsActions, dispatch);

  const addCar = useCallback(
    (car) => {
      setItems((cars) => ([...cars, car]));
    },
    [setItems]
  );

  const delCar = useCallback(
    (id) => {
      setItems((cars) => cars.filter(car => (car.id !== id )));
    },
    [setItems],
  );

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    setItems(cars);
  }, [cars]);

  const colors = [
    'white',
    'black',
    'grey',
    'red',
    'green'
  ];

  const options = [
    {
      value: 'pednding',
      displayName: 'Ожидается'
    },
    {
      value: 'out_of_stock',
      displayName: 'Нет в наличии'
    },
    {
      value: 'in_stock',
      displayName: 'В наличии'
    }
  ];

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
        <Form addCar={addCar} colors={colors} options={options}/>
        <List
          cars={items}
          delCar={delCar}
          isFetching={isFetching}
          error={error}
        />
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