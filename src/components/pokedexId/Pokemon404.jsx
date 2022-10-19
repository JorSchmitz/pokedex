import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../shared/Header'
import './styles/pokemon404.css'

const Pokemon404 = () => {
    return (
        <div className='pokemon404'>
            <Header />
            <div className='pokemon404-container'>
                <img className='pokemon404-img' src="/public/images/pokemon404/who.png" alt="" />
                <h1>Pokemon not found 🤷‍♂️</h1>
                <Link to={'/pokedex'}>Return to Pokedex</Link>
            </div>
        </div>

    )
}

export default Pokemon404