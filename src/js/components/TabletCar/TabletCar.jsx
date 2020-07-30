import React from 'react';
import translateCarStatus from '../../utils/translateCarStatus';

export default function TabletCar({car, delCar}) {
  const {
    color,
    description,
    price,
    id,
    status,
    title,
    year
  } = car;
  return (
    <tr className="car">
      <td>
        <p className="car__title">{title}</p>
        <p className="car__descr">{description}</p>
      </td>
      <td>{year}</td>
      <td>
        <span className='car__color' style={{backgroundColor: color}}></span>
      </td>
      <td>{translateCarStatus(status)}</td>
      <td>{`${price} руб.`}</td>
      <td>
        <button
          onClick={() => {delCar(id);}}
          className='car__del car__del--tablet'
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}
