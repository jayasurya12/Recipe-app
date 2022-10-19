import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks,GiChickenOven } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Category = () => {
  return (
    <List>
        <NLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NLink>
        <NLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NLink>
        <NLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NLink>
        <NLink to={'/cuisine/indian'}>
            <GiChickenOven/>
            <h4>Indian</h4>
        </NLink>
    </List>
  )
}

const List=styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
`;
const NLink =styled(NavLink)`
    display:flex;
    flex-direction:coloumn;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    background:linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);

    h4{
        color:#fff;
        font-size:14px;
    }
    svg{
        color:#fff;
        font-size:1.5rem;
    }
    &.active{
        background:linear-gradient(to right, #f27121,#e94057);
        svg{
            color:#fff
        }
        h4{
            color:#fff
        }
    }
`

export default Category