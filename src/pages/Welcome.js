import { useState } from "react"
import { NavLink } from "react-router-dom"
import './Welcome.css'

export default function Welcome(){

    const [loginData, setLoginData] = useState({
        email:'',
        password: ''
    })

    const handleChange = e => {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e =>{
        e.preventDefault()
    }

    return <div className="welcome">
        <h1>friendbook</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <input type="email" name="email" id="email" placeholder="Email adress" onChange={handleChange} required/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required/>
            </label>
            <input type='submit' value="Log In" className="btn-blue"/>
            <NavLink to='/password-reset' style={{color: 'gray', fontSize:'1.2rem'}} >Forgot your password?</NavLink>
            <hr></hr>
            <p style={{color: 'gray', textAlign: 'center', fontSize:'1.2rem'}}>Or</p>
            <input type='submit' value='Register' className="btn-green"/>
        </form>
    </div>   
}