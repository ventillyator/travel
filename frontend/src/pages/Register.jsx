import { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from "../store/slices/user";
import { Navigate } from 'react-router-dom';
import './style.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect , setRedirect ] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        try {
            e.preventDefault(); 
        axios.post('http://localhost:4444/register', { name, email, password: pass })
            .then( res => dispatch(setUser(res.data) ))
            .catch(e => console.log(e));
            setRedirect(true)
        } catch (e) {
            console.log(e);
        }
    };
    if (redirect) {
       return <Navigate to='/' />
    }
    return (
        <div className="register container">
            <div className="title">Регистрация</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password" 
                    name="password"
                    placeholder="пароль"
                    onChange={e => setPass(e.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="имя"
                    onChange={e => setName(e.target.value)}
                />
                <input type="submit" value="Зарегистрироваться" />
            </form>
            
        </div>
    );
}
