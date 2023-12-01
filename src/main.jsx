import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ToDo from './Cadastro/Cadastro';
import Detalhe from './Detalhe/Detalhe';
import Home from './Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>   
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/detalhe/:id' element={<Detalhe  />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
