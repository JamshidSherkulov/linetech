import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Questions from './pages/Questions/Questions';
import News from './pages/News/News';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }>
          <Route index element={ <Home /> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/questions' element={ <Questions /> } />
          <Route path='/news' element={ <News /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

