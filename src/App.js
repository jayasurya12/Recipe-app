import React from 'react'
import Category from './components/Category'
import Pages from './pages/Pages'
import {BrowserRouter,Link} from 'react-router-dom'
import Serach from './components/Serach'
import {GiKnifeFork} from 'react-icons/gi'
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <GiKnifeFork style={{fontSize:'4rem'}}/>
      <Logo to={'/'}>deliciouss</Logo>
    </nav>
      <Serach/>
      <Category/>
      <Pages/>
    </BrowserRouter>
  )
}
const Logo =styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-family:'Lobster Two',cursive;
  font-weight:600;
`
export default App