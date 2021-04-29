import React, { Component } from 'react'
import './App.css'

import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Game/>
        {/*<Greet name='Aarti' stand='10th'>
          <p>aarti is a good girl</p>
        </Greet>*/}
        {/*<Greet name='Mohit' stand='Second year'/>
        <Welcome name='Aarti' stand='10th'>
          <button>Action</button>
        </Welcome>
        <Welcome name='Mohit' stand='Second year'/>*/}
        {/*<Message/>*/}
        {/*<Counter addValue={100}/>*/}
      </div>
    );
  }
}

export default App;
