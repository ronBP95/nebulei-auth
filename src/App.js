import React from 'react';
import { Route, Routes } from "react-router-dom"

import Register from './containers/Register/index'
import Login from './containers/Login/index'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
