import { useRef } from 'react';

import useToken from '../../Hook/useToken';

//Sass
import './login.scss'

function Login() {

    const [, setToken] = useToken()

    const inputName = useRef()
    const inputPassword = useRef()

    

    async function loginFunction(e) {
        e.preventDefault()
        fetch('http://pressa-back.herokuapp.com/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: inputName.current.value,
                password: inputPassword.current.value
            })
        }).then(res => res.json())
            .then(data => data.token ? setToken(data.token) : null)

    }

    return (
        <section className='login'>
            <div className="container">
                <div className="login__wrapper">
                    <h1 className='login__title'>Log in</h1>
                    <form className='login__form' action="" onSubmit={loginFunction}>
                        <input className='login__input' ref={inputName} name='username' type="text" placeholder='Enter your username' />
                        <input className='login__input' ref={inputPassword} name='password' type="password" placeholder='Enter your password' />
                        <button className='login__btn' type='Submit'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login