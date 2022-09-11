import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Cashback from "./Cashback";
import Giftcards from "./Giftcards";
import ProductComparison from "./ProductComparison";

const Swichcase = () => {
  const [active , setActive] = useState("Gift Cards")
 
 
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        {/* <div className="container-fluid"> */}
        <div class="d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="#" onClick={(e) => setActive("Gift Cards")}>
                Gift Cards
              </Link>
              <Link className="nav-link" to="#" onClick={(e) => setActive("Product Comparison")}>
                Product Comparison
              </Link>
              <Link className="nav-link" to="#" onClick={(e) => setActive("Cashback")}>
                Cashback
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>
      {active==="Gift Cards"?<Giftcards/>:active==="Product Comparison"?<ProductComparison/>:active==="Cashback"?<Cashback/>:<Giftcards/>}
    </>
  );
};

export default Swichcase;
