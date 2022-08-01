import './Order.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import homeSvg from '../../Assets/img/Home.svg'
import upload from '../../Assets/img/upload.png'
import { useRef, useState } from 'react'

function Order() {
    const offRef = useRef()
    const onRef = useRef()
    
    const [data, setData] = useState([])
    const [date, setDate] = useState(new Date(Date.now()));
    const [time, setTime] = useState('12:00');
    const [name, setName] = useState('');
    const [img, setImg] = useState();
    const [type, setType] = useState('online');
    const [job, setJob] = useState('');
    const [text, setText] = useState('');
    const [tel1, setTel1] = useState('');
    const [link, setLink] = useState('');
    const [tel2, setTel2] = useState('');
    const [cat, setCat] = useState('IT');
    const [sub, setSub] = useState('Web Dasturlash');


    const formData = new FormData()

    formData.append('publisher_name', name)
    formData.append('publisher_date', date)
    formData.append('publisher_time', time)
    formData.append('publisher_tel1', tel1)
    formData.append('publisher_tel2', tel2)
    formData.append('publisher_link', link)
    formData.append('img', img[0])
    formData.append('publisher_title', cat)
    formData.append('publisher_description', sub)
    formData.append('publisher_type', type)
    formData.append('publisher_text', text)
    formData.append('publisher_job', job)

    function PostOrder(e) {
        e.preventDefault()

        fetch('http://pressa-back.herokuapp.com/posts/publish/', {
            method: "POST",
            body: formData
        }).then(res => res.json())
        .then(data => setData(data))

    }
    console.log(data);

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
                                <input type="date"  className='order_div_select' onChange={evt=> setDate(evt.target.value)}/>
                                <input type="time"  className='order_div_select_tis' onChange={evt=> setTime(evt.target.value)}/>
                            </div>
                            <div className="order_mini_div_two">
                                <p className='order_div_text_two'>Yo’nalishni belgilang</p>
                                <p className='order_div_text_three'>Ichki yo’nalishni</p>
                                <input type="text" onChange={evt=> setCat(evt.target.value)} placeholder="Yonalish" className='order_div_select' />
                                <input type="text" onChange={evt=> setSub(evt.target.value)}  placeholder="Ichki yonalish" className='order_div_select_tis'/>
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two'>Tadbir turi</p>
                                <button type='button'  className='clicked' value="2" onChange={evt=> setType(evt.target.value)} ref={offRef} onClick={() => {
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
                                    <input required type="url" onChange={evt=> setLink(evt.target.value)} className='order_input_link' />
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
                                <input required type="text" onChange={evt=> setText(evt.target.value)} className='order_div_select_direction' />
                                <input required type="text"  onChange={evt=> setName(evt.target.value)} className='order_div_select_mini_direction' />
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two_prof'>Professiya</p>
                                <input type="text"  onChange={evt=> setJob(evt.target.value)} required className='order_div_select_prof_direction' />
                                <div className="order_link_div">
                                    <p className='order_div_text_link'>Telefon raqami</p>
                                    <input required type="tel"  onChange={evt=> setTel1(evt.target.value)} defaultValue="+998"  className='order_input_link_prof' />
                                </div>
                                <p className='order_div_text_two_tel'>Qo’shimcha tel raqam</p>
                                <input required type="tel"  onChange={evt=> setTel2(evt.target.value)} defaultValue="+998"   className='order_div_select_mini_direction_tel' />

                                <div className="upload">
                                    <span>Rasm yuklash</span>
                                    <label className="custom-upload">
                                    <input name="upload" onChange={evt=> setImg(evt.target.files)}  type="file" />
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