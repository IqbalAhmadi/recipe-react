import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'


function Cuisine() {
    let params = useParams()
    const [cuisine, setCuisine] = useState([])
    const getCuisine = async (name) => {
        // const check = localStorage.getItem('cuisine')
        // if(check) {
        //     setCuisine(JSON.parse(check))
        // } else {
        const api_key = 'f849132ea36047479347ab80d1421f7b'
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&cuisine=${name}`)
        const data = await api.json()
        // localStorage.setItem('cuisine', JSON.stringify(data.recipes)) 
        setCuisine(data.results)
        console.log(data.results) 
        // }
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    },[params.type]);
    
  return (
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt='' />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;


export default Cuisine