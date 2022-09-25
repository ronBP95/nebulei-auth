import React from 'react';
import { Route, Routes } from "react-router-dom"

// Component Imports
import { Register, Login, Home} from './containers/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
