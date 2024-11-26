import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayOut from './LayOut';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            {/* <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App