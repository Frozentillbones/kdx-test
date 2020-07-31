import React from 'react';
import TextInput from './../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';
import Radios from '../Radios/Radios';
import './style';

export default function Form({addCar, colors, options}) {
  
  return (
    <form onSubmit={(event) => {
      const { target } = event;
      event.preventDefault();
      const fd = new FormData(target);
      let names = [];
      for (const input of target) {
        const isButton = input.tagName === 'BUTTON';
        const hasName = names.findIndex(name => input.name === name) !== -1;
        if (hasName || isButton) {
          continue;
        }
        names = [...names, input.name];
      }
      const entries = names.map(name => [name, fd.get(name)]);
      const car = Object.fromEntries(entries);
      addCar({...car, id: Date.now()});
    }}>
      <div className="input-row">
        <TextInput name="title" id="title" label="Название" required/>
        <TextInput name="price" id="price" label="Цена" required/>
        <TextInput name="year" id="year" label="Год" required/>
      </div>
      <TextInput textarea modifier="long" name="description" id="description" label="Описание"/>
      <div className="select-row">
        <div className="colors">
          <p className="colors__label">Цвет</p>
          <Radios className="color-radios">
            {
              colors && colors.map((color, key) => 
              <Checkbox type="radio" required className="color-radio" key={key} value={color} name="color" id={color} label/>)
            }
          </Radios>
        </div>
        <Select name="status" id="status" options={options}/>
        <button className="send">отправить &gt;</button>
      </div>
    </form>
  );
}
