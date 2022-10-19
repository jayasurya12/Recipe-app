import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom'

const Cuisines = () => {
  console.log('cuisine')
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEYS}&cuisine=${name}`);
    const recipe = await data.json();
    setCuisine(recipe.results)
  }
  useEffect(() => {
    getCuisine(params.type);
    console.log(cuisine)
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>)
      })}
    </Grid>
  )

}
const Grid = styled(motion.div)`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  grid-gap:3rem
`;

const Card = styled.div`
img{ 
  width:100%;
  border-radius:2rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}
`

export default Cuisines