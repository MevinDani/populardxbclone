import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayOut from './LayOut';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App