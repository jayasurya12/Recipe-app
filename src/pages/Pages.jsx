import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Cuisines from '../components/Cuisines'

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine' element={<Cuisines/>}/>
      </Routes>
  )
}

export default Pages