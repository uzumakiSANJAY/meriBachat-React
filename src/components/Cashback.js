import React from "react";

const Cashback = () => {
  return (
    <>
      <div className="container m-auto border bg-secondary rounded-3">
        <div className="">
          <h3 className="text-center my-lg-5">
            Steps for how MB Works for Cashback
          </h3>
          <div className="d-flex p-lg-5" style={{ rowGap: 0 }}>
            <div className="col-lg-3 col-md-3">
              <h1 className="">01</h1>
              <h5 className="">Check the links on our site</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">02</h1>
              <h5 className="">Choose the best option for you</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">03</h1>
              <h5 className="">Click on get cashback button</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">04</h1>
              <h5 className="">Cashback will be credited to your MB wallet</h5>
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
    </>
  );
};

export default Cashback;
