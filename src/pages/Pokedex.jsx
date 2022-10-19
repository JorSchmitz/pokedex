import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState('All Pokemons')

    useEffect(() => {
        if (typeSelected !== 'All Pokemons') {
            axios.get(typeSelected)
                .then(res => {
                    const result = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(result)
                })
                .catch(err => console.log(err))
        } else {
            const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])

    const userName = useSelector(state => state.userName)

    // Logica de paginacion
    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(8)
    const initialPoke = (page - 1) * pokePerPage
    // initialPoke + pokePerPage + 1    
    const finalPoke = page * pokePerPage

    return (
        <div className='pokedex2'>
            <header>
                <Header />
                <p className='pokedex__welcome'><span className='pokedex__welcome-span'>Welcome {userName}</span>, here you can find your favorite pokemon.</p>
            </header>
            <aside>
                <section className='pokedex__search'>
                    <InputSearch />
                    <SelectByType setPage={setPage} setTypeSelected={setTypeSelected} />
                </section>
                <Pagination setPage={setPage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
            </aside>
            <main>
                <div className='card-container'>
                    {
                        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                            <CardPoke key={pokemon.url} url={pokemon.url} />
                        ))
                    }
                </div>
            </main>
            <Pagination setPage={setPage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
        </div>
    )
}

export default Pokedex