import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {
  const [details, setdetails] = useState({});
  const [active, setActive] = useState('instruction');
  const params = useParams();
  const recipeData = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEYS}`);
    const detailsData = await data.json();
    setdetails(detailsData);
  }
  useEffect(() => {
    recipeData();
  }, [params.name])
  return (
    <DataWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={active === 'instruction' ? 'active' : ''} onClick={() => setActive("instruction")}>Instruction</Button>
        <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setActive("ingredients")}>Ingredients</Button>
        {
          active == 'instruction' &&
          (<div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>)
        }
        {
          active == 'ingredients' &&
          (<ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>)
        }
      </Info>
    </DataWrapper>
  )
}
const DataWrapper = styled.div`
  margin-top:10rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    background:linear-gradient(35deg,#494949,#313131);
    color:#fff;
  }
  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem
  }
  ul{
    margin-top:2rem;
  }
`
const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  background:#fff;
  border:2px solid balck;
  margin-right:2rem;
  font-weight:600;
  margin-bottom:1rem;
  cursor:pointer
`
const Info = styled.div`
  margin-left:10rem;
`
export default Recipe