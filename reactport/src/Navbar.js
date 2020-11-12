import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="index.html">
              Jake Haberle
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="index.html">
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link" href="portfolio.html">
                  Portfolio
                </a>
                <a className="nav-item nav-link" href="contact.html">
                  Contact
                </a>
                <a
                  className="nav-item nav-link"
                  href="https://www.linkedin.com/in/jake-haberle-97182493/"
                >
                  Linkedin
                </a>
                <a
                  className="nav-item nav-link"
                  href="https://github.com/jhaberle"
                >
                  Github
                </a>
                <a
                  className="nav-item nav-link"
                  href="https://docs.google.com/document/d/e/2PACX-1vQ8WyzWccdvK3iP2lJ43hO35NpvaZrCQktgeNZekDVXC51JH_zepy7WTOxQDBci_JoHgNm_oADs2ux6/pub"
                >
                  Resume
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
