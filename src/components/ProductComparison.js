import React from "react";

const ProductComparison = () => {
  return (
    <>
      <div className="container m-auto border bg-secondary rounded-3">
        <div className="">
          <h3 className="text-center my-lg-5">
            Steps for how MB Works for Product Comparison
          </h3>
          <div className="d-flex p-lg-5" style={{ rowGap: 0 }}>
            <div className="col-lg-3 col-md-3">
              <h1 className="">01</h1>
              <h5 className="">Search for Product</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">02</h1>
              <h5 className="">View all the buying option of the same product from different site</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">03</h1>
              <h5 className="">Compare price & features</h5>
            </div>
            <div className="col-lg-3 col-md-3">
              <h1 className="">04</h1>
              <h5 className="">Click on buy now button</h5>
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

export default ProductComparison;
