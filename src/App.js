import React from 'react'
import Header from './components/header/Header'
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact";
import Help from "./pages/Help/Help";
import Donate from "./pages/Donate/Donate";
import DonationSuccess from './pages/DonationSuccess/DonationSuccess';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
            </div>
            <Routes>
                <Route exact path='/' element={<Main />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route exact path='/donate' element={<Donate />}></Route>
                <Route exact path='/help' element={<Help />}></Route>
                <Route exact path='/donate/success' element={<DonationSuccess />}></Route>
            </Routes>
        </Router>
    )
}
