import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link,useParams} from 'react-router-dom'

const Cuisines = () => {
    const [cuisine,setCuisine]= useState([]);
    let params = useParams();
    const getCuisine = async(name)=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEYS}&cuisine=${name}`);
        const recipe = await data.json();
        setCuisine(recipe.results)
    }
    useEffect(() => {
        console.log(params)
    }, [])
    
  return (
    <div>Cuisines</div>
  )
}

export default Cuisines