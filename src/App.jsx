
import {Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Dummy from './Components/Dummy'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Header />
      <section id="about"><About /></section>
      <section id="overview"><Hero /></section>
      <section id="projects"><Projects /></section>
      <Dummy/>
      <section id="contact"><Contact /></section>
      <Footer/>
    </>
  )
}

export default App
