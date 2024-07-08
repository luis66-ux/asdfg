import React, { useEffect, useState}  from "react"
import { Router, Route, Link, Routes } from "react-router-dom"
import Inicio from "./components/inicio"
import Perfil from "./components/perfil"
import Usuario from "./components/usuario"
/*
  Componente vista: Llamado App
*/

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/Perfil" element={<Perfil />}></Route>
      <Route path="/Usuario" element={<Usuario />}></Route>
    </Routes>

  )
}

export default App