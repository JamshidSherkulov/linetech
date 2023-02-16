import React from "react";
import './Footer.css'
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {

    return (
        <div id="footer__container" className="p-3">
            <div className="text-light lh-base text-start">
                <h6>Kontaktlar</h6>
                <h6>Katalog</h6>
                <h6>Kirish</h6>
                <h6>Mashhur</h6>
                <h6>Yangilar</h6>
                <h6>Mening kutubxonam</h6>
            </div>
            <div className="text-light text-start">
                <h6 className="mb-3">To'lov</h6>
                <h6 className="mb-5">Qanday obuna bo'lish kerak</h6>
                <h6>To'lovni qaytarish</h6>
            </div>
            <div className="text-light text-start">
                <h6 className="mb-3">Yangiliklarga obuna bo'ling</h6>
                <input id="emailInput" type="email" placeholder="E-mail" />
                <button className="btn btn-primary mx-2">Obuna bo'ling</button>
                <div className="mt-4">
                    <h6>Aksiya va yangiliklarni kuzatib boring</h6>
                    <AiFillFacebook className="fs-4 mx-2 icons"/>
                    <AiOutlineTwitter className="fs-4 mx-2 icons" />
                    <AiOutlineInstagram className="fs-3 mx-2 icons" />
                    <AiFillYoutube className="fs-3 mx-2 icons" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
