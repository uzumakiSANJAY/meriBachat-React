import React, { useState } from "react";
import { Link } from "react-router-dom";

const Giftcards = () => {
  const [mode, setMode] = useState("Online");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to=""
                onClick={(e) => setMode("Online")}
              >
                {/* Home <span className="sr-only">(current)</span> */}
                Online
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to=""
                onClick={(e) => setMode("Offline")}
              >
                Offline
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Body */}
      {mode === "Online" ? (
        <div className="container m-auto border bg-secondary rounded-3">
          <div className="">
            <h3 className="text-center my-lg-5">
              Steps for how MB Works for Gift Cards
            </h3>
            <div className="d-flex p-lg-5" style={{ rowGap: 0 }}>
              <div className="col-lg-3 col-md-3">
                <h1 className="">01</h1>
                <h5 className="">Buy Gift card from us</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">02</h1>
                <h5 className="">Get Gift card via your mail</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">03</h1>
                <h5 className="">Select a product & proceed to pay</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">04</h1>
                <h5 className="">Reedem coupon in git card section</h5>
              </div>
            </div>
            <div className="text-center">
              <a href="https://meribachat.in/cashback" target="_blank">
                <button className="btn btn-lg btn-primary py-3 px-5 ">
                  Buy now
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="container m-auto border bg-secondary rounded-3">
          <div className="">
            <h3 className="text-center my-lg-5">
              Steps for how MB Works for Gift Cards
            </h3>
            <div className="d-flex p-lg-5" style={{ rowGap: 0 }}>
              <div className="col-lg-3 col-md-3">
                <h1 className="">01</h1>
                <h5 className="">Buy Gift card from us</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">02</h1>
                <h5 className="">Shop for your needs</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">03</h1>
                <h5 className="">Check if gift cards are accepted</h5>
              </div>
              <div className="col-lg-3 col-md-3">
                <h1 className="">04</h1>
                <h5 className="">While billing pay via gift card</h5>
              </div>
            </div>
            <div className="text-center">
              <a href="https://meribachat.in/cashback" target="_blank">
                <button className="btn btn-lg btn-primary py-3 px-5 ">
                  Buy now
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Giftcards;
