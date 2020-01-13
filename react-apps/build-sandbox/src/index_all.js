import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import Calc from './calc';
import Log from './log';

import img from './react.png';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1,2,3,4,5));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);

ReactDOM.render(<App/>, document.getElementById('root'));