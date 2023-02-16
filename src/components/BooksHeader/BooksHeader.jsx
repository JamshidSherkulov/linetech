import React from "react";
import "./BooksHeader.css";
import HarryPotter from "../../assets/HomeHeader/Harry_Potter.png";
import { BsSearch } from "react-icons/bs";

const BooksHeader = () => {

  function searchBook(e) {
    let text = e.target.value.toLowerCase();
  }

  return (
    <div id="books__container">
      <div id="backgroundImage">
        <img src={HarryPotter} alt="" />
      </div>
      <div id="front__side">
        <div className="text-start">
          <h1 className="text-light">
            Dunyoning istalgan nuqtasida istalgan qurilmada kitoblarni o'qing va
            tinglang
          </h1>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <BsSearch />
            </span>
            <input
              onChange={(props) => searchBook(props)}
              type="search"
              class="form-control w-50"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksHeader;
