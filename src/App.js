import React from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage.components'
import ShopPage from './pages/shop/shopage.component'
import './App.css'
import Header from './components/header/header.component';
export default function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} /> 
      </Routes>
    </div>
    </Router>
  )
}
