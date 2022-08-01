import { Link } from 'react-router-dom'

//components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

//SASS
import './About.scss'

//Images
import arrow from '../../Assets/img/search_arrow.svg'
import home_icon from '../../Assets/img/home_icon.svg'

function About() {
    return (
        <>
            <Header />
            <main>
                <section className='about'>
                    <div className="container">
                        <div className='about__header'>
                            <img className='about__header--icon' src={home_icon} alt="home_icon" />
                            <Link to='/' className='about__header--link'> Home</Link>
                            <img className='about__header--arrow' src={arrow} alt="arrow" />
                            <p className='about__header--text'>About</p>
                        </div>
                        <h1 className='about__title'>Biz haqimizda</h1>
                        <ul className='about__list'>
                            <li className='about__item'>
                                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
                                musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch
                                soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni
                                "bir dasturxon atrofida" to'plashga qaror qildik.
                            </li>
                            <li className='about__item'>Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
                            </li>
                            <li className='about__item'>
                                Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.
                            </li>
                            <li className='about__item'>
                                Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About