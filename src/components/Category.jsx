import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Category = () => {
  return (
    <List>
        <NavLink to={'/cuisione/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisione/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisione/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cuisione/Japanes'}>
            <GiChopsticks/>
            <h4>Japanes</h4>
        </NavLink>
    </List>
  )
}

const List=styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
`
export default Category