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

  const [nickname, setNickname] = useState(vehicle.nickname || '');

  return (
    <div>
      <div className="field">
        <label>Nickname</label>
        <input id="nickname" type="text" value={nickname} name='vehicle[nickname]' onChange={(e) => setNickname(e.target.value)} />
        <div>{nickname}</div>
      </div>
    </div>
  );
};

ReactOnRails.register({
  CreativeForm,
});

