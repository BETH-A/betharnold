import React from "react";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="navbar-brand" >Beth Arnold</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="index.html">About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                    <span className="sr-only">(current)</span>
                </li>
            </ul>
        </div>
        <a href="https://www.linkedin.com/in/beth-arnold-640170153/" target="_blank" className="img-link">
            <img src="images/icons/linkedIn_blackCircle.png" alt="LinkedIn Link" />
        </a>
        <a href="https://github.com/BETH-A" target="_blank" className="img-link">
            <img src="images/icons/github_cat.png" alt="Github Link" />
        </a>
    </nav>
    )
};

export default Navbar;