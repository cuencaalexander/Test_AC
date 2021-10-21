// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import ReactOnRails from 'react-on-rails';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import React, { useState } from 'react';

const CreativeForm = (props) => {
  const {
    vehicle,
  } = props;
  
  const [wheels, setWheels] = useState(vehicle.wheels || '');
  const [nickname, setNickname] = useState(vehicle.nickname || '');
  const [mileage, setMileage] = useState(vehicle.mileage || '');
  const [brand, setBrand] = useState(vehicle.brand || 'sedan');
  const [engineStatus, setEngineStatus] = useState(vehicle.engine_status || 'works');
  const [doors, setDoors] = useState(vehicle.doors || '');
  const [seatStatus, setSeatStatus] = useState(vehicle.doors || '');



  const brandSelect = () => {
    
    return (
      <div className="field">
        <label>Brand</label> 
        <select id="vehicleBrand" value={brand} onChange={(e) => setBrand(e.target.value)} >
          <option value="sedan"> Sedan </option>
          <option value="coupe"> Coupe </option>
          <option value="minivan"> Mini Van </option>
          <option value="motorcycle"> Motorcycle </option>
        </select>
      </div>
    )
  }

  const seatStatusSelect = () => {
    if(brand == 'motorcycle'){
        return (<div className="field">
        <label>Seat Status</label>
        <select value = {seatStatus} id="seatStatus" onChange={(e) => setSeatStatus(e.target.value)} >
          <option value="works"> Works </option>
          <option value="fixable"> Fixable </option>
          <option value="Junk"> Junk </option>
        </select>
      </div>
      )
    } else {
      return null
    }
  }

  const wheelsSelect = () => {
    if(brand == 'motorcycle') {
      return (    
      <div className="field">
      <label>Wheels</label>
      <select value = {wheels} id="wheels" onChange={(e) => setWheels(e.target.value)} >
        <option value={0}> 0 </option>
        <option value={1}> 1 </option>
        <option value={2}> 2 </option>
      </select>
      </div>)
    }
    else {
      return (
        <div className="field">
          <label>Wheels</label>
          <select value = {wheels} id="wheels" onChange={(e) => setWheels(e.target.value)} >
            <option value={0}> 0 </option>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
          </select>
        </div> 
      )
    }
  }

  const doorsSelect = () => {
    if(brand == 'motorcycle') {
      return null;
    }
    else {
      return (
        <div className="field">
          <label>Doors</label>
          <select value = {doors} id="doors" onChange={(e) => setDoors(e.target.value)} >
            <option value={0}> 0 </option>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
          </select>
        </div> 
      )
    }
  }

  const engineStatusSelect = () => {
    return (<div className="field">
        <label>Engine Status</label>
        <select value = {engineStatus} id="engineStatus" onChange={(e) => setEngineStatus(e.target.value)} >
          <option value="works"> Works </option>
          <option value="fixable"> Fixable </option>
          <option value="Junk"> Junk </option>
        </select>
      </div>)
  }

  const mileageSelect = () => {
    
    return (
    <div className="field">
      <label>Mileage</label>
      <input id="mileage" type="text" value={mileage} name='vehicle[mileage]'v onChange={(e) => setMileage(e.target.value)} />
    </div>
    )
  }

  const nickName = () => {
    return (
    <div className="field">
    <label>Nickname</label>
    <input id="nickname" type="text" value={nickname} name='vehicle[nickname]' onChange={(e) => setNickname(e.target.value)} />
    <div>{nickname}</div>
    </div>)
  }

  return (
    <div>
      {nickName()}
      {brandSelect()}
      {wheelsSelect()}
      {engineStatusSelect()}
      {mileageSelect()}
      {doorsSelect()}
      {seatStatusSelect()}
    </div>
  );
};

ReactOnRails.register({
  CreativeForm,
});

