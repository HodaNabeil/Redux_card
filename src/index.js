import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products';
import BasicExample from './components/Navbar';
import CardProduct from './components/CardProduct';

import { Provider } from 'react-redux'
import { store } from './rtk/store';

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <BasicExample/>
      < Products/>
    </>,
  },
  {
    path :'/products',
    element : <>     <BasicExample/> <Products/></> ,
  }
  ,
  {
    path: '/cardProduct',
    element:<><BasicExample/> <CardProduct/></>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
