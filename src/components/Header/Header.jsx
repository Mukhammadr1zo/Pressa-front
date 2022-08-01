import { Link } from 'react-router-dom'
import { useRef } from 'react'

//SASS
import './Header.scss'

//images
import lupa from '../../Assets/img/lupa.svg'

function Header() {

    const modalClass = useRef()

    function Addclass(){
        modalClass.current.classList.toggle('header__modal--active')
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <a href="/"><p className='header__logo'>Pressa</p></a>
                    <form className='header__form'>
                        <label htmlFor="input">
                            <img className='header__icon' src={lupa} alt="lupa_icon" />
                        </label>
                        <input id='input' className='header__input' type="text" placeholder='Izlash' />
                    </form>
                    <div className='header__list'>
                        <Link className='header__link' to='/about'>Biz haqimizda</Link>
                        <Link className='header__link' to='admin'>Admin</Link>
                        <Link className='header__link' to='/elon'>+ E'lon berish</Link>
                        <div className='header__bar' onClick={Addclass}>
                            <span className='header__line'></span>
                            <span className='header__line'></span>
                            <span className='header__line'></span>
                        </div>
                    </div>
                    <div ref={modalClass} className="header__modal">
                        <button onClick={Addclass} className='header__modal--btn'>X</button>
                        <Link className='header__modal--link' to='/about'>Biz haqimizda</Link>
                        <Link className='header__modal--link' to='#'>Savol va javoblar</Link>
                        <Link className='header__modal--link' to='/elon'>+ E'lon berish</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header