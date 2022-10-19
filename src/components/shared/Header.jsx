import React from 'react'
import './styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__red'>
                <div className='header__black'></div>
                <div className='header__circle'>
                    <div className='header__circle-int'>
                        <div className='header__circle-int-grey'></div>
                    </div>
                </div>
            </div>
            <img className='pokedex__img2' src="/images/pokedex/pokedex2.png" alt="" />
        </header>
    )
}

export default Header
