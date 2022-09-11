import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <ul className="d-flex justify-content-end">
                <li>
                  <a className="text-white" href="https://meribachat.in/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="https://meribachat.in/install/app"
                  >
                    Download App
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="https://meribachat.in/corporate"
                  >
                    Corporate
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="https://meribachat.in/store-locator"
                  >
                    Store Locator
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/signup">
                    Signup
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
