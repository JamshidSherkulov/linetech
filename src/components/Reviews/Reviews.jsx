import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from '../../data/reviewsData.js'
import './Reviews.css'

const Reviews = () => {

    const reviewSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
        <div>
            <h1>Sharhlar</h1>
            <Slider className="m-5" { ...reviewSettings }>
                {
                    reviewsData.map((item, index) => {
                        let cardImg = {
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                        }
                        return(
                            <div id="reviews__wrapper" key={ index } >
                                <div>
                                    <img src={ item.img_url } style={ cardImg } alt="" />
                                </div>
                                <div className="text-start mt-3">
                                    <p className="w-75">{ item.comment }</p>
                                    <h6 className="fw-bold fst-italic">{ item.name }</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )

}

export default Reviews;