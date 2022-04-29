import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Add from './views/Add';
import Edit from './views/Edit';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" default />
          <Route element={<Detail />} path="/pets/:_id" />
          <Route element={<Add />} path="/pets/add" />
          <Route element={<Edit />} path="/pets/edit/:_id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
