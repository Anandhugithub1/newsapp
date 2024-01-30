import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Sports from './Sports/Sports';
import Business from './Business/Business';
import Tech from './Tech/Tech';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inter from './International/Inter';
import Health from './Health/Health';
import { PNF } from './404/PNF';



const router =createBrowserRouter (
  createRoutesFromElements(
    <Route path='' element={<App/>}>

<Route index element={<Home/>}/>
<Route path='sports' element ={<Sports/>}/>
<Route path='business' element ={<Business/>}/>
<Route path='tech' element={<Tech/>}/>
<Route path='inter' element={<Inter/>}/>
<Route path='health' element={<Health/>}/>
<Route path='*' element={<PNF/>}/>
    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
