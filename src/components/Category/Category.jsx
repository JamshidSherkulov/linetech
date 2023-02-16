import React from "react";
import './Category.css'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import first from '../../assets/Books/1.jpg'
import second from '../../assets/Books/2.jpg'
import third from '../../assets/Books/3.jpg'
import fourth from '../../assets/Books/4.jpg'
import fifth from '../../assets/Books/5.jpg'
import sixth from '../../assets/Books/6.jpg'

const Category = () => {

    return(
        <div id="books__container" className="mt-5">
            <h1>Kategoriyalar</h1>
            <div id="books">
                <div>
                    <div>
                        <div>
                            <img src={ first } alt="" />
                        </div>
                        <h5>Badiiy adabiyot</h5>
                    </div>
                    <div>
                        <div>
                            <img src={ second } alt="" />
                        </div>
                        <h5>badiiy bo'lmagan</h5>
                    </div>
                    <div>
                        <div>
                            <img src={ third } alt="" />
                        </div>
                        <h5>Komikslar</h5>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={ fourth } alt="" />
                        </div>
                        <h5>Bolalar adabiyoti</h5>
                    </div>
                    <div>
                        <div>
                            <img src={ fifth } alt="" />
                        </div>
                        <h5>Fantastika</h5>
                    </div>
                    <div>
                        <div>
                            <img src={ sixth } alt="" />
                        </div>
                        <h5>Biznesga oid adabiyot</h5>
                    </div>
                </div>
            </div>
            <div id="more__btn" className="my-3">
                <button className="btn btn-success">Hammasini ko'rish <AiOutlineDoubleRight /> </button>
            </div>
        </div>
    )
}

export default Category;