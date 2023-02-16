import React from "react";
import questionsData from "../../data/questionsData";


const Questions = () => {

    return(
        <div className="container my-5" style={{height: '100vh'}}>
            <h1 className="fw-bold">Tez-tez so'raladigan savollar</h1>
            <p>Qanday savollaringiz bor? Bizga yordam beramiz.</p>
            <input type="search" className="form-control w-25 mx-auto mt-3" placeholder="Search..."  />

            <div className="accardion" id="accordionExample">
                {
                    questionsData.map((item, index) => {
                        return (
                            <div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={ item.id }>
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls={ item.ariaControls }>
                                            { item.title }
                                        </button>
                                    </h2>
                                    <div id={ item.ariaControls } class="accordion-collapse collapse show" aria-labelledby={ item.ariaLabelledby } data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            { item.descprition }
                                        </div>
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

export default Questions;