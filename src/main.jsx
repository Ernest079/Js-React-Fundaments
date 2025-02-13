import React from 'react'
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp/> */}
    {/* <FirstApp title="O mueres como héroe o vives lo suficiente para convertirte en villano" subTitle="Harvey Dent"/> */}
    <CounterApp value = {12}/>
  </React.StrictMode>
);