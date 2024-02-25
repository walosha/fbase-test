import { Fragment } from 'react'
import Hero from './hero'
import Benefits from './benefit'
import Features from './features'
import Industries from './industries'
import Mockup from './mockup'
import Quote from './quote'
import Footer from './footer'
import './main.css'

function App() {
  return (
    <Fragment>
      <Hero />
      <main className="relative">
        <Benefits />
        <Features />
        <Industries />
      </main>
      <Mockup />
      <Quote />
      <Footer />
    </Fragment>
  )
}

export default App
