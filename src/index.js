import { StrictMode } from "react";
import ReactDOM from "react-dom";

import './css/normalize.css';
import './css/general.css';
import App from './App';



ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
