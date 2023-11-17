import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FakeData from '../shared/FakeData.json'
import Home from '../pages/Home'
import Faker from '../pages/Faker'
import Guma from '../pages/Guma'
import Keria from '../pages/Keria'
import Oner from '../pages/Oner'
import Zeus from '../pages/Zeus'

function Router() {
  const [Letter, setLetter] = useState(FakeData)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home Letter={Letter} setLetter={setLetter} />}
        ></Route>
        <Route
          path="Zeus/:id"
          element={<Zeus Letter={Letter} setLetter={setLetter} />}
        ></Route>
        <Route
          path="Oner/:id"
          element={<Oner Letter={Letter} setLetter={setLetter} />}
        ></Route>
        <Route
          path="Faker/:id"
          element={<Faker Letter={Letter} setLetter={setLetter} />}
        ></Route>
        <Route
          path="Guma/:id"
          element={<Guma Letter={Letter} setLetter={setLetter} />}
        ></Route>
        <Route
          path="Keria/:id"
          element={<Keria Letter={Letter} setLetter={setLetter} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
