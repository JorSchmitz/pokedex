import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'
import './styles/formHome.css'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder='Your name'
            />
            <button>Start</button>
        </form>
    )
}

export default FormHome