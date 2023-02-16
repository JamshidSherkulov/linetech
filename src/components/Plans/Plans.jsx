import React from "react";
import plansData from "../../data/plansData";

const Plans = () => {

    return(
        <div className="container my-5">
            <h1>Plan Tariflari</h1>
            {
                plansData.map((item, index) => {

                    let plansStyle = {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }

                    // if (item.id % 2 === 0) {
                    //     return plansData.flexDirection = 'row-reverse'
                    // }
                       

                    return(
                        <div key={index} style={plansStyle} id="plans__container">
                            <div style={{width: '40%'}} className="text-center">
                                <h1 className="lh-base text-secondary">{ item.title }</h1>
                                <h1>{ item.price } <span className="fs-4">So'm</span></h1>
                                <button className="btn btn-success">Tanlash</button>
                            </div>
                            <div style={{width: '40%'}}>
                                <img src={ item.image_url } alt="" />
                                <p className="lh-base fw-bold text-secondary">{ item.describtion }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Plans;   