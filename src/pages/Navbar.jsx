import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/Navbar/logo.png'
import {AiOutlineHome, AiOutlineBook, AiOutlineQuestionCircle, AiOutlineSearch} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'


const Navbar = () => {
    return(
        <div id="navbar__container">
            <div>
                <img id="logo" src={ logo } alt="" />
            </div>
            <div id="navbar__list">
                <Link className="navbar__links" to={'/'}><span className="fs-5"><AiOutlineHome /> Bosh Sahifa</span></Link>
                <Link className="navbar__links" to={'/books'}><span className="fs-5"><AiOutlineBook /> Kitoblar</span></Link>
                <Link className="navbar__links" to={'/news'}><span className="fs-5"><BiNews />Xabar</span></Link>
                <Link className="navbar__links" to={'/questions'}><span className="fs-5"><AiOutlineQuestionCircle /> FAQs</span></Link>
            </div>
            <div id="search__container">
                <div class="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><AiOutlineSearch /></span>
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                    <div>
                        <button className="btn btn-primary ms-2">Kirish</button>
                        <button className="btn btn-success ms-2">Ro'yhatdan o'tish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;