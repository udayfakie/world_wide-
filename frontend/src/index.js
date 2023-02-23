import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { HelmetProvider} from 'react-helmet-async'
import { StoreProvider } from './Store';

ReactDOM.render(
    <React.StrictMode>
      <StoreProvider>
        <HelmetProvider>
          <App />
      </HelmetProvider>
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
