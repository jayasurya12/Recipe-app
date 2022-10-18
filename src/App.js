import React from 'react'
import Category from './components/Category'
import Pages from './pages/Pages'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Category/>
      <Pages/>
    </Router>
  )
}

export default App