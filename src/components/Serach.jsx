import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';

const Serach = () => {
    const [input,setInput]=useState();
    const navigate =useNavigate();
    const setHandlear =(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    <FormStyle onSubmit={setHandlear}>
        <div>
            <FaSearch/>
            <input type='text' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin:0rem 15rem;
    div{
        postion:relative;
        width:100%
    }
    input{
        border:none;
        background:linear-gradient(35deg,#494949,#313131);
        font-size:1.5rem;
        color:#fff;
        padding:0.5rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
        width:100%;
    }
    svg{
        position:absolute;
        top:20px;
        // left:0%;
        transform:translate(100%,-50%);
        color:#fff;
    }
`
export default Serach