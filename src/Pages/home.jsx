import React from 'react'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Clients from '../components/clients'
import Contact from '../components/contact'
import Footer from '../components/footer'

const home = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default home
