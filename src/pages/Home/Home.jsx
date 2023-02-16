import React from "react";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Category from "../../components/Category/Category";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import NewBook from "../../components/NewBooks/NewBooks";
import Plans from "../../components/Plans/Plans";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {

    return(
        <div>
            <HomeHeader />
            <Category />
            <Bestsellers />
            <NewBook />
            <Reviews />
            <Plans />
        </div>
    )
}

export default Home;