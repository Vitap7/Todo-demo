import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const DATA = [
  {id:"todo-0",name:"HaveFun",completed:true},
  {id:"todo-1",name:"Work",completed:false},
  {id:"todo-2",name:"Repeat",completed:false}
];
const BUTTON = [
  {name:"All",pressed:true},
  {name:"Active",pressed:false},
  {name:"Completed",pressed:false}
]

root.render(
  <React.StrictMode>
    <App tasks = {DATA} filter = {BUTTON}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
