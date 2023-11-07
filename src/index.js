import React from 'react';


import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import HomeRouter from './components/App/HomeRouter';

const rootElement = 
document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Router>
      <HomeRouter/>
    </Router>
  </StrictMode>
);
