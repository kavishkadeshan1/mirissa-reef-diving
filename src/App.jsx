import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import Tours from './pages/Tours'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Book from './pages/Book'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
