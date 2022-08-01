import { Route, Routes } from 'react-router-dom';

//components
import Home from './components/Home/Home';
import Single from './components/Singlepage/Single';
import About from './components/About/About';
import Login from './components/login/login';
import Order from './components/Order/Order'
import Private from './Route/Private';
import Public from './Route/Public'
import Admin from './components/admin/Admin';

//SASS
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Public />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/elon' element={<Order />} />
          <Route path='/single/:postId' element={<Single />} />
        </Route>
        <Route path='/' element={<Private />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
