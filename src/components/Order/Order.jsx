import './Order.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import homeSvg from '../../Assets/img/Home.svg'
import upload from '../../Assets/img/upload.png'
import { useRef, useState } from 'react'

function Order() {
    const offRef = useRef()
    const onRef = useRef()
    const inputDate = useRef()
    const inputTime = useRef()
    const inputCat = useRef()
    const inputSubCat = useRef()
    const inputName = useRef()
    const inputLink = useRef()
    const inputJob = useRef()
    const inputTel1 = useRef()
    const inputTel2 = useRef()
    const inputUpload = useRef()
    const [, setData] = useState([])



    function PostOrder(e) {
        e.preventDefault()

        fetch('https://pressa-back.herokuapp.com/posts/publish/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                publisher_name: inputName.current.value,
                publisher_date: inputDate.current.value,
                publisher_time: inputTime.current.value,
                publisher_tel1: inputTel1.current.value,
                publisher_tel2: inputTel2.current.value,
                publisher_link: inputLink.current.value,
                publisher_photos: inputUpload.current.value,
                publisher_jobs: inputJob.current.value,
                publisher_title: inputCat.current.value,
                publisher_description: inputSubCat.current.value,
                publisher_type: 'online',
                publisher_text: inputSubCat.current.value

            })
        }).then(res => res.json())
        .then(data => setData(data))
    }

    return (
        <>
            <Header />
            <div className="container">
                <form className="order_form" onSubmit={PostOrder}>
                <div className="top_container">
                    <span className='order_span'>
                        <img className='order_home_svg' src={homeSvg} alt="img" />
                        <p className='order_tile'>E’lon berish</p>
                    </span>
                    <h1 className='order_title_order'>E’lon berish</h1>

                        <div className="order_div_order">
                            <h1 className='order_div_title'>Vaqt va yo’nalishni tanlang</h1>
                            <div className="order_mini_div_one">
                                <p className='order_div_text'>O’tkaziladigan sanani kiriting</p>
                                <input type="date" ref={inputDate} className='order_div_select' />
                                <input type="time" ref={inputTime} className='order_div_select_tis'/>
                            </div>
                            <div className="order_mini_div_two">
                                <p className='order_div_text_two'>Yo’nalishni belgilang</p>
                                <p className='order_div_text_three'>Ichki yo’nalishni</p>
                                <input type="text" ref={inputCat} placeholder="Yonalish" className='order_div_select' />
                                <input type="text" ref={inputSubCat} placeholder="Ichki yonalish" className='order_div_select_tis'/>
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two'>Tadbir turi</p>
                                <button type='button'  className='clicked' value="2" ref={offRef} onClick={() => {
                                    offRef.current.classList.add('order')
                                    if (offRef.current.classList.contains('order')) {
                                        offRef.current.classList.add('clicked')
                                        offRef.current.classList.remove('type_btn')
                                        onRef.current.classList.add('type_btn')
                                        onRef.current.classList.remove('clicked')
                                    } else {
                                        offRef.current.classList.remove('clicked')
                                        offRef.current.classList.add('type_btn')
                                        onRef.current.classList.add('clicked')
                                        onRef.current.classList.remove('type_btn')
                                    }
                                }}>Online</button>
                                <button type='button' className='type_btn' value="1" ref={onRef} onClick={() => {
                                    onRef.current.classList.remove('order')
                                    if (onRef.current.classList.contains('order')) {
                                        offRef.current.classList.add('clicked')
                                        offRef.current.classList.remove('type_btn')
                                        onRef.current.classList.remove('clicked')
                                        onRef.current.classList.add('type_btn')
                                    } else {
                                        offRef.current.classList.remove('clicked')
                                        offRef.current.classList.add('type_btn')
                                        onRef.current.classList.add('clicked')
                                        onRef.current.classList.remove('type_btn')
                                    }
                                }}>Offline</button>
                                <div className="order_link_div">
                                    <p className='order_div_text_link'>Link kiriting</p>
                                    <input required type="url" ref={inputLink} className='order_input_link' />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="top_container_two">
                    <h1 className='order_title_order'>Tashkilotchi</h1>
                    <div className="order_flex_div">
                        <div className="user_normal_div">
                            <label htmlFor="1" className='order_normal_title'>Jismoniy shaxs</label>
                            <input id='1' required type="radio"  value="standard" name='user' className='order_normal_check' />
                        </div>
                        <div className="user_normal_div">
                            <label htmlFor="2" className='order_normal_title'>Yuridik shaxs</label>
                            <input id='2' required type="radio" value="normal" name='user' className='order_normal_check' />
                        </div>
                    </div>
                    <div className="order_form">
                        <div className="order_div_order">
                            <div className="order_mini_div_two">
                                <p className='order_div_text_two'>Yuridik nomi</p>
                                <p className='order_div_text_three'>Ismi sharifi</p>
                                <input required type="text" className='order_div_select_direction' />
                                <input required type="text" ref={inputName} className='order_div_select_mini_direction' />
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two_prof'>Professiya</p>
                                <input type="text" ref={inputJob} required className='order_div_select_prof_direction' />
                                <div className="order_link_div">
                                    <p className='order_div_text_link'>Telefon raqami</p>
                                    <input required type="tel" ref={inputTel1} defaultValue="+998"  className='order_input_link_prof' />
                                </div>
                                <p className='order_div_text_two_tel'>Qo’shimcha tel raqam</p>
                                <input required type="tel" ref={inputTel2} defaultValue="+998"   className='order_div_select_mini_direction_tel' />

                                <div className="upload">
                                    <span>Rasm yuklash</span>
                                    <label className="custom-upload">
                                    <input name="upload" ref={inputUpload} type="file" />
                                    <img src={upload} alt="upload" />
                                    <span className="file-name">Upload img</span>
                                    <span className="zmdi zmdi-upload"></span>
                                    </label>

                                     <p>
                                        Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
                                    </p>
                                </div>
                                <br />
                                <br />
                                <br />
                                <button className='login__btn' type='Submit'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Order