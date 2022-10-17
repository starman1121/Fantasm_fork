import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
