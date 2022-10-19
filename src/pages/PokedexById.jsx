import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'
import './styles/pokedexById.css'

const PokedexById = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() => {

        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`

        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
    }, [])

    if (hasError) {
        return <Pokemon404 />
    }

    if (pokemon) {
        console.log(pokemon);
    }

    return (
        <article className='pokedex-id'>
            <section className='pokemon-id__info'>
                <Header />
                <header className={`pokemon-id__header bg-${pokemon?.types[0].type.name}`}>
                    <img className='pokemon-id__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </header>
                <div>
                    <div className='subtitles-id'>
                        <h2 className={`h2-subtitle id-subtitle letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
                        <h2 className={`h2-subtitle letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                    </div>
                    <div className='weight-height'>
                        <p className='weight-height__stat'><span className='weight-height__span'>Weight</span> {pokemon?.weight}</p>
                        <p className='weight-height__stat'><span className='weight-height__span'>Height</span> {pokemon?.height}</p>
                    </div>
                    <div className='type-skills'>
                        <div>
                            <h3>Type</h3>
                            <ul className='type-ul'>
                                {
                                    pokemon?.types.map(type => (
                                        <li className={`bg-${type.type.name} type-li`} key={type.slot}>{type.type.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Skills</h3>
                            <ul className='skills-ul'>
                                {
                                    pokemon?.abilities.map(skill => (
                                        <li className='skills-li' key={skill.ability.name}>{skill.ability.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='stats-id'>
                        <h2 className='stats-title'>Stats</h2>
                        <ul className='stats-ul'>
                            {
                                pokemon?.stats.map(stat => (
                                    <li key={stat.stat.name}>
                                        <div className='stats-li'>
                                            <span>
                                                {stat.stat.name}
                                            </span>
                                            <span className='stats-li__base'>
                                                {stat.base_stat}/150
                                            </span>
                                        </div>
                                        <div className='bar-border'>
                                            <div className='bar-filled' style={{ height: '24px', width: `${stat.base_stat}%` }}></div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className='pokemon-id__movements'>
                <header>
                    <h2 className='h2-subtitle move-subtitle'>Movements</h2>
                </header>
                <div className='movements-container'>
                    {
                        pokemon?.moves.map(move => (
                            <div className='movement'>{move.move.name}</div>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}

export default PokedexById