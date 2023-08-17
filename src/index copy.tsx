import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Webla from './App';
import MyHeader from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesApp from './MoviesApp';
import MovieDetails from './MovieDetails';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route key={1} path='/movies_app' element={<MoviesApp/>}></Route>
        <Route key={2} path='/movie/:id' element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
