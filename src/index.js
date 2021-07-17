import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);