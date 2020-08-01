import React from 'react';
import translateCarStatus from '../../utils/translateCarStatus';

export default function MobileCar({car, delCar}) {
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
    <div className="car">
      <div className="car-row-top">
        <p className="car__title">{title}</p>
        <span className='car__color' style={{backgroundColor: color}}></span>
        <p className="car__price">{price} руб.</p>
      </div>
      <p className="car__descr">{description}</p>
      <div className="car-row-bottom">
        <p className="car__year">{year}</p>
        <p className="car__status">{translateCarStatus(status)}</p>
        <span className="grow"></span>
        <button
          onClick={() => {delCar(id);}}
          className='car__del car__del--mobile'
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
