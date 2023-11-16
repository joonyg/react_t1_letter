import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Faker from '../pages/Faker'
import Guma from '../pages/Guma'
import Keria from '../pages/Keria'
import Oner from '../pages/Oner'
import Zeus from '../pages/Zeus'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Zeus/:id" element={<Zeus />}></Route>
        <Route path="Oner/:id" element={<Oner />}></Route>
        <Route path="Faker/:id" element={<Faker />}></Route>
        <Route path="Guma/:id" element={<Guma />}></Route>
        <Route path="Keria/:id" element={<Keria />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
