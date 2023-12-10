import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastro from './Cadastro/Cadastro'
import Home from './Home/Home'
import Detalhe from './Detalhe/detalhe'
import Destaques from './Destaques/Destaques'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         <Routes>   
          
         <Route path="/"  element={<Home/>}></Route>
         <Route path='/cadastro'   element={<Cadastro/>}></Route>
         <Route path='/destaques'  element={<Destaques/>}></Route>
         <Route path='/detalhe/:id'element={<Detalhe/>}></Route>
 
         </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
