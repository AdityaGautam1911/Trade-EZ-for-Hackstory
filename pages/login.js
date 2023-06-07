import React from 'react'
import style from "../styles/Login.module.css"
import {useRouter} from 'next/router';

export default function login() {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        router.push('/dashboard');
    }        
    
    return (
        <div className="main">
            <div className={style.container}>
                <h2 className={style.heading}>Login</h2>
                <form>
                    <label className={style.label} for="username">Username:</label>
                    <input className={style.input}type="text" id="username" name="username" required />

                    <label className={style.label} for="password">Password:</label>
                    <input className={style.input} type="password" id="password" name="password" required />

                    <button onClick={handleClick} className={style.submit} type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}
