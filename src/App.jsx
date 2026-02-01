import { Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeDo from './pages/WhatWeDo'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black pattern-background">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
