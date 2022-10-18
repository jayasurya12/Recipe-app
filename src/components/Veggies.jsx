import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const Veggies = () => {
    const [veggie, setVeggie] = useState([])
    const getApi = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEYS}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            console.log(JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    }
    useEffect(() => {
        getApi();
    }, []);
    return (
        <div>
            <Contaier>
                <h3>Our Veggitarian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: "5rem"
                    }}
                >
                    {
                        veggie.map((recipe, i) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Card>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Contaier>
        </div>
    )
}
const Contaier = styled.div`
    margin:4rem 0rem;
`
const Card = styled.div`
    min-height:15rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }
    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        color:#fff;
        width:100%;
        text-align:center;
        font-weigth:600;
        font-size:1rem;
        height:60%;
        display:flex;
        justify-content:center;
        align-items:center;
    } 
`;
const Gradient =styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Veggies