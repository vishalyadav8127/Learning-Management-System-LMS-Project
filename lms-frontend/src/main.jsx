import './index.css';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster/>
        </BrowserRouter>
    </Provider>
    
);
