import React from 'react'

export default function MenuHeader() {
  return (
    <header
      className="header-light transparent scroll-light"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <div className="align-self-center header-col-left">
                <div id="logo">
                  <a href="home.html">
                    <img alt="" src="images/logo-1.png" />
                  </a>
                </div>
              </div>
              <div className="align-self-center ml-auto header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <a href="home.html">Home</a>
                  </li>
                  <li>
                    <a href="functions-problems.html">Functions Problems</a>
                  </li>
                  <li>
                    <a href="instance-problems">Instance Problems</a>
                  </li>
                </ul>
              </div>

              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
