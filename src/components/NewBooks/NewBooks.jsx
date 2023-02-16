import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newBooksData from "../../data/newBooksData";
import { AiOutlineDoubleRight } from 'react-icons/ai'

const NewBook = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return(
        <div className="my-5">
            <h1>Yangilar</h1>
            <Slider className="container mt-5" {...settings}>
                {
                    newBooksData.map((item, index) => {

                        let cardImg = {
                            width: '100%',
                            objectFit: 'cover',
                        }

                        return(
                            <div key={index} className="card border-0">
                                <img src={ item.image_url } style={cardImg} className="card-img-top text-center" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{ item.title }</h5>
                                    <p className="card-text">{ item.describtion }</p>
                                </div>
                            </div>                          
                        )
                    })
                }
            </Slider>
            <div id="more__btn" className="mt-5">
                <button className="btn btn-success">Hammasini ko’rish <AiOutlineDoubleRight /></button>
            </div>
        </div>
    )
}

export default NewBook;