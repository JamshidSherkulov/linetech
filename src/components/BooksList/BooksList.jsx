import React from "react";
import booksListData from "../../data/booksListData";

const BooksList = () => {

    return(
        <div className="container my-5">
            <h1 className="my-5">Kitoblar</h1>
            <div className="row">
                {   
                    booksListData.map((item, index) => {

                        return(
                            <div className="col-3">
                                <div key={index} className="card border-0">
                                    <img src={ item.image_url } className="card-img-top text-center" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{ item.title }</h5>
                                        <p className="card-text">{ item.describtion }</p>
                                    </div>
                                </div>  
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BooksList;