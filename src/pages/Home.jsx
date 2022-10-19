import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
    return (
        <article className='pokedex'>
            <img className='pokedex__img' src="/public/images/home/pokedex.png" alt="" />
            <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
            <p className='pokedex__text'>To start, give me your name</p>
            <FormHome />
        </article>
    )
}

export default Home