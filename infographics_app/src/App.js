import React, { Component } from 'react';
import './App.css';

import SkillInput from './components/SkillInput/index';
import DataInput from './components/DataInput/index';
import SubmitButton from './containers/SubmitButton';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <h1>Infographic Generator</h1>

        <div class="components">
          <SkillInput />
          <DataInput />
          <SubmitButton />
        </div>

      </div>
    );
  }
}

export default App;
