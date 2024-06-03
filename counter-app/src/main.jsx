import React from 'react'
import ReactDOM from 'react-dom';
// import { App } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <FirstApp title="Im spiderman" subtitle = { 123 } /> */}
    <CounterApp value = { 10 } />
  </React.StrictMode>
);
