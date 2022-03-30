import './App.css';
import '../src/';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SendParcel from './Components/SendParcel/SendParcel';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import store from './Redux/Store/store'
import { Provider } from 'react-redux';


function App() {
    return ( 
        <div className = "App" >
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='sendparcel' element={<SendParcel/>}/>
     
   </Routes>
   
        </div>
    );
}

export default App;