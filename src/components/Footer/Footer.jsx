import { Link } from 'react-router-dom'

//SASS
import './Footer.scss'

//Images
import phone_icon from '../../Assets/img/phone.svg'
import facebook_icon from '../../Assets/img/facebook_icon.svg'
import tg_icon from '../../Assets/img/tg_icon.svg'
import insta_icon from '../../Assets/img/insta_icon.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__wrapper'>
                    <h2 className='footer__logo'>Pressa</h2>
                    <div className="footer__box">
                        <Link className='footer__link' to='/about'>Biz haqimizda</Link>
                        <Link className='footer__link' to='#'>Savol va Javoblar</Link>
                    </div>
                    <div className="footer__contact">
                        <div className="footer__phone--box">
                            <img className='footer__phone--icon' src={phone_icon} alt="phone_icon" />
                            <a className='footer__phone--num' href="tel: +71 200 11 22">+71 200-11-22</a>
                        </div>
                        <div className="footer__icons">
                            <a href="https://www.facebook.com/najottalim/">
                                <img className='footer__icon' src={facebook_icon} alt="facebook_icon" />
                            </a>
                            <a href="https://www.instagram.com/najottalim/?hl=ru">
                                <img className='footer__icon' src={insta_icon} alt="insta_icon" />
                            </a>
                            <a href="https://t.me/najottalim">
                                <img className='footer__icon' src={tg_icon} alt="tg_icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer