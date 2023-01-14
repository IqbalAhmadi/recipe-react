import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const api_key = 'f849132ea36047479347ab80d1421f7b'
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}`)
        const data = await api.json()
        setSearchedRecipes(data.results)
    }

    useEffect(() => {
        getSearched(params.search)
    },[params.search])
  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' +item.id}>
                    <img src={item.image} alt=''/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
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

export default Searched