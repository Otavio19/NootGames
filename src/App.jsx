import React from 'react'
import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sobre from './components/Sobre'
import Funcionalidades from './components/Funcionalidades'
import Clientes from './components/Clientes'
import Footer from  './components/Footer'
import styles from './App.css'

function App() {
  return (
    <div>
        <Navbar/>
    <main>
    <Home/>
    <Sobre />
    <Funcionalidades />
    <Clientes />
    </main>
    <Footer />
    </div>
  )
}
export default App
