import React from 'react';

export default function Home() {

  return (
    <div id="wrapper">
      <header className="header-light-black transparent scroll-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="align-self-center header-col-left">
                  <div id="logo">
                    <a href="/">
                      <img alt="" src="images/logo-1.png" />
                    </a>
                  </div>
                </div>
                <div className="align-self-center ml-auto header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="applications">Applications</a>
                    </li>
                    <li>
                      <a href="workspaces">Workspaces</a>
                    </li>
                    <li>
                      <a href="hybroo">About Hybroo</a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="no-bottom no-top" id="content">
        <div id="top" />

        <section
          data-bgimage="url(images/background/1.png) bottom"
          className="full-height vertical-center"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                <h4>Calcule respostas no</h4>
                <div className="spacer-10" />
                <h1>
                  <span className="id-color">
                    <strong>HYBROO</strong>
                  </span>
                </h1>
                <p className="lead">
                  em nível de especialista usando nossos algoritmos, base de
                  conhecimento e tecnologia de IA.
                </p>
                <div className="spacer-20" />
                <a href="/" className="btn-custom">
                  Ler Mais
                </a>
                <div className="mb-sm-30" />
              </div>

              <div
                className="col-lg-6 offset-lg-1 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <img src="images/misc/1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="widget">
                <a href="/">
                  <img alt="" className="logo" src="images/logo-1.png" />
                </a>
                <div className="spacer-20" />
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, apid comer sd asdp.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="widget">
                <p>
                  Signup for our newsletter to get the latest news, updates and
                  special offers in your inbox.
                </p>
                <form
                  action="blank.php"
                  className="row"
                  id="form_subscribe"
                  method="post"
                  name="form_subscribe"
                >
                  <div className="col text-center">
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="Digite seu e-mail"
                      type="text"
                    />
                    <a href="/" id="btn-submit">
                      <i className="arrow_right" />
                    </a>
                    <div className="clearfix" />
                  </div>
                </form>
                <div className="spacer-10" />
                <small>Your email is safe with us. We dont spam.</small>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 sm-text-center mb-sm-30">
              <div className="mt10">
                &copy; Copyright 2020 - Hybroo Matematics
              </div>
            </div>

            <div className="col-md-6 text-md-right text-sm-left">
              <div className="social-icons">
                <a href="/">
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a href="/">
                  <i className="fa fa-twitter fa-lg" />
                </a>
                <a href="/">
                  <i className="fa fa-linkedin fa-lg" />
                </a>
                <a href="/">
                  <i className="fa fa-google-plus fa-lg" />
                </a>
                <a href="/">
                  <i className="fa fa-rss fa-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="preloader">
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    </div>
  );
}
