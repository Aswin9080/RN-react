import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Component from './component.js';
import Random from './randomnumber.js'
const root = ReactDOM.createRoot(document.getElementById('root'));

function Changename() {
  var [myname, functionstate] = useState('Aswin')

  function change() {

     functionstate('abc')
  }


  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}


root.render(
  <div>
  <Random></Random>
  </div>
);



/*const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Component></Component>
    <Random></Random>
  </div>
)*/










