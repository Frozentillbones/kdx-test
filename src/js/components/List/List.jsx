import React from 'react';
import useMedia from '../../hooks/useMedia';
import Loader from '../Loader/Loader';
import './style';
import TabletCar from '../TabletCar/TabletCar';
import MobileCar from '../MobileCar/MobileCar';

export default function List({
  cars,
  delCar,
  isFetching,
  error
}) {
  const device = useMedia(
    [
      '(min-width: 720px)',
      '(min-width: 320px)'
    ],
    ['tablet', 'mobile']
  );

  if (isFetching) {
    return <Loader/>;
  }

  if (error) {
    const {status, statusText} = error;
    return <p>{status} что-то пошло не так... {statusText}</p>;
  }

  if (device === 'mobile') {
    return (
      <div className="car-list">
        {
          cars.map((car, i) => <MobileCar car={car} key={i} delCar={delCar}/>)
        }
      </div>
    );
  }

  return (
    <table className="cars">
      <tbody>
        <tr className="cars__caption">
          <td>Название</td>
          <td>Год</td>
          <td>Цвет</td>
          <td>Статус</td>
          <td>Цена</td>
          <td></td>
        </tr>
        {
          cars.map((car, i) => <TabletCar car={car} key={i} delCar={delCar}/>)
        }
      </tbody>
    </table>
  );
}
