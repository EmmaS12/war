import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name=""/>
    <h2></h2>
  </div>
);

let suits = ['spades','hearts','clubs','diamonds'];
let cards = [];
  for (let i = 2; i<15; i++){
    for(let j = 0; j <suits.length; j++) {
      cards.push(i + '_' +suits[j]);
    }
  }





render(<App />, document.getElementById('root'))
