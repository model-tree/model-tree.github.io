import { Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeDo from './pages/WhatWeDo'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'

function App() {
  return (
    <div className="min-h-screen bg-black pattern-background flex flex-col">
      <Banner />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
