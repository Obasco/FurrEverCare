import React from 'react'
import Login from './Com/Loginform'
import Signup from './Com/Sign'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import TextTyp from './Com/TextTyp'
import AllPage from './Com/AllPage'
import AnimalShell from './Com/AnimalShell'
import PetOwner from './Com/PetOwner'
import About from "./Layout/About"
import Navbar from './Layout/Navbar'
import Vet from './Com/Vet'
import Vetinfo from './Com/Vetinfo'


const App = () => {
 return(
 <>



 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Signup />} />
      <Route path='/text' element={<TextTyp />} />
      <Route path='/home' element={<AllPage />}/>
      <Route path='/shelter' element={<AnimalShell />}/>
      <Route path='/petowner' element={<PetOwner />}/>
      <Route path='/about' element={<About />} />
      <Route path='/vet' element={<Vet />} />
      <Route path='/vetinfo' element={<Vetinfo />} />

  </Routes>
 </BrowserRouter>

 </>


)

}

export default App