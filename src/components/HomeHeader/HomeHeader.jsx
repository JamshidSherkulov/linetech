import React from "react";
import './HomeHeader.css'
import HarryPotter from '../../assets/HomeHeader/Harry_Potter.png'
import Illustration from '../../assets/HomeHeader/Illustration.png'

const HomeHeader = () => {

    return(
        <div id="header__container">
            <div id="backgroundImage">
                <img src={ HarryPotter } alt="" />
            </div>
            <div id="front__side">
                <div className="text-start">
                    <h1 className="text-light">Dunyoning istalgan nuqtasida istalgan qurilmada kitoblarni o'qing va tinglang</h1>
                    <button className="btn btn-success p-2">Katalogga o'ting</button>
                </div>
                <div>
                    <img src={ Illustration } alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;