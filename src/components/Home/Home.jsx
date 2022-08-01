import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

//components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

//SASS
import './Home.scss'

//images
import calendar from '../../Assets/img/calendar.svg'
import direction_icon from '../../Assets/img/direction_icon.svg'
import online_icon from '../../Assets/img/online_icon.svg'
import offline_icon from '../../Assets/img/offline_icon.svg'
import person_icon from '../../Assets/img/person_icon.svg'
import arrow from '../../Assets/img/search_arrow.svg'
import clock_icon from '../../Assets/img/clock.svg'
import design_icon from '../../Assets/img/Design.svg'
import user_icon from '../../Assets/img/user.svg'
import reklama1 from '../../Assets/img/reklama1.png'
import reklama2 from '../../Assets/img/reklama2.png'


function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    const secondSearchClass = useRef()
    const actionSearchClass = useRef()
    const speakerClass = useRef()
    const viewDate = useRef()
    const [nextPageCount, setNextPageCount] = useState(1)

    function viewCalendar() {
        viewDate.current.classList.toggle('search__date--active')
    }
    function secondSearch() {
        secondSearchClass.current.classList.toggle('search__second--active')
        actionSearchClass.current.classList.remove('search__action--active')
        speakerClass.current.classList.remove('search__speaker--active')
    }
    function action() {
        secondSearchClass.current.classList.remove('search__second--active')
        actionSearchClass.current.classList.toggle('search__action--active')
        speakerClass.current.classList.remove('search__speaker--active')
    }
    function speaker() {
        secondSearchClass.current.classList.remove('search__second--active')
        actionSearchClass.current.classList.remove('search__action--active')
        speakerClass.current.classList.toggle('search__speaker--active')
    }

    //GET PostsData
    const [postData, setPostData] = useState([])
    useEffect(() => {
        fetch('https://pressa-back.herokuapp.com/admin/accepted')
            .then(res => res.json())
            .then(data => setPostData(data.data))
    }, [])

    //GET categorys 
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://pressademobackend.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategory(data.message))
    }, [])

    const mainCategoryArr = []

    if (category) {
        for (let i = 0; i < category.length; i++) {
            const array = Object.keys(category[i])
            if (array) {
                mainCategoryArr.push(array)
            }
        }
    }

    //GET next post data
    function nextData() {
        setNextPageCount(nextPageCount + 1)

        fetch(`https://pressa-back.herokuapp.com/admin/accepted`)
            .then(res => res.json())
            .then(data => setPostData(data))
    }

    function sendSearch() {
        console.log(viewDate.current.value);
    }

    return (
        <>
            < Header />

            <main>
                <section className='search'>
                    <div className="container">
                        <h1 className='search__title' data-aos="zoom-in">Eng so'ngi master klasslar va tadbirlar bizning saytda</h1>
                        <form data-aos="zoom-in" action="#" onSubmit={sendSearch} className='search__form'>
                            <ul className='search__list'>
                                <li className='search__item' onClick={viewCalendar}>
                                <img className='search__icon' src={calendar} alt="calendar" /> 
                                    <input ref={viewDate} className='search__date--active' type="date" />
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                </li>
                                <li className='search__item' onClick={secondSearch}>
                                    <img className='search__icon' src={direction_icon} alt="direction_icon" />
                                    <p className='search__text'>Bo'lim tanlang</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={secondSearchClass} className='search__second'>
                                        {
                                            mainCategoryArr.map(e => {
                                                return (
                                                    <li key={e} className='search__second--item'>
                                                        <h2 className='search__second--category'>{e}</h2>
                                                        <div className='search__second--subCategory'>
                                                            <input id='1' className='search__second--checkbox' type="checkbox" />
                                                            <div className='checkbox'></div>
                                                            <label htmlFor="1">
                                                                <p className='search__second--text'>Web dasturlash</p>
                                                            </label>
                                                        </div>
                                                        <div className='search__second--subCategory'>
                                                            <input id='2' className='search__second--checkbox' type="checkbox" />
                                                            <label htmlFor="2">
                                                                <p className='search__second--text'>Mobile dasturlash</p>
                                                            </label>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className='search__item' onClick={action}>
                                    <img className='search__icon' src={online_icon} alt="online_icon" />
                                    <p className='search__text'>Online / Offline</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={actionSearchClass} className='search__action'>
                                        <li className='search__action--item'>
                                            <img className='search__action--icon' src={online_icon} alt="online_icon" />
                                            <label htmlFor="online" className='search__action--label'>Online</label>
                                            <input name='ganre' id='online' className='search__action--radio' type="radio" />
                                        </li>
                                        <li className='search__action--item'>
                                            <img className='search__action--icon' src={offline_icon} alt="online_icon" />
                                            <label htmlFor="offline" className='search__action--label'>Offline</label>
                                            <input name='ganre' id='offline' className='search__action--radio' type="radio" />
                                        </li>
                                    </ul>
                                </li>
                                <li onClick={speaker} className='search__item'>
                                    <img className='search__icon' src={person_icon} alt="person_icon" />
                                    <p className='search__text'>Ism familya</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={speakerClass} className='search__speaker'>
                                        <li className='search__speaker--item'>
                                            <input id='17' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="17" className='search__speaker--label'>Abdulla Azizov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='18' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="18" className='search__speaker--label'>Akbar Turdiyev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='19' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="19" className='search__speaker--label'>Akbar Jumayev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='20' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="20" className='search__speaker--label'>Begzod Iskandarov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='21' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="21" className='search__speaker--label'>Baxodir Jalolov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='22' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="22" className='search__speaker--label'>Sardor Qodirov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='23' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="23" className='search__speaker--label'>Sohib Sharipov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='24' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="24" className='search__speaker--label'>Dilmurod Alimbayev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='25' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="25" className='search__speaker--label'>Dilshod Rahmanov</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button type='Submit' className='search__btn'>Izlash</button>
                        </form>
                    </div>
                </section>

                <section className='intro'>
                    <div className="container">
                        <h3 className='intro__title'>Oxirgi e’lonlar</h3>
                        <ul className='intro__list'>
                            {
                                postData.map(e => {
                                    console.log(e.publisher_id);
                                    return (
                                        <Link to={'/single/' + e.publisher_id} key={e.publisher_id} className='intro__card' data-aos="zoom-in">
                                            <img className='intro__card--img' src={'https://pressa-back.herokuapp.com/' + e.publisher_photos} alt="img" />
                                            <div className='intro__box'>
                                                <h2 className='intro__card--title'>{e.publisher_title}</h2>
                                                <ul className='intro__card--box'>
                                                    <li className='intro__card--item'>
                                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                                        <p className='intro__card--text'>{e.publisher_name}</p>
                                                    </li>
                                                    <li className='intro__card--item'>
                                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                                        <p className='intro__card--text'>{e.publisher_job}</p>
                                                    </li>
                                                    <li className='intro__card--item'>
                                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                                        <p className='intro__card--text'>{e.publisher_date}</p>
                                                    </li>
                                                    <li className='intro__card--item'>
                                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                                        <p className='intro__card--text'>{e.publisher_time}</p>
                                                    </li>
                                                    <li className='intro__card--item'>
                                                        <img className='intro__card--icon' src={
                                                            Number(e.publisher_type) === 2 ? online_icon : offline_icon
                                                        } alt="online_icon" />
                                                        <p className='intro__card--text'>{
                                                            Number(e.publisher_type) === 2 ? 'online' : 'offline'
                                                        }</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                        <button onClick={nextData} className='intro__nextBtn'>Ko’proq ko’rish</button>
                    </div>
                </section>

                <section className='advertising'>
                    <div className="container">
                        <ul className='advertising__list'>
                            <li className='advertising__item' data-aos="zoom-in">
                                <img className='advertising__img' src={reklama1} alt="reklama1" />
                            </li>
                            <li className='advertising__item' data-aos="zoom-in">
                                <img className='advertising__img' src={reklama2} alt="reklama2" />
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home