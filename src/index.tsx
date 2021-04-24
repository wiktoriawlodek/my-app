import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Reset} from 'styled-reset';
import Main_page from './components/Main_page/Main_page';

ReactDOM.render(
  <>
    <Reset />
    <Main_page/>
  </>,
  document.getElementById('root')
);

