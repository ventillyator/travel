import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user";
export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect , setRedirect] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        try {
            e.preventDefault(); 
        axios.post('http://localhost:4444/login', { email, password: pass })
            .then(res =>dispatch(setUser(res.data)))
            .catch(e => console.log(e));
        setRedirect(true)
        } catch (e) {
            console.log(e);
        }
    };

    if (redirect) {
       return <Navigate  to='/'/>
    }
    return (
        <div className="login container">
            <div className="title">Вход</div>
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
                <input type="submit" value="Войти" />
            </form>
            
        </div>
    );
}
