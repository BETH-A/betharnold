import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear()
        console.log(currentYear)
    return(
        <footer className="footer">
            <p>copyright © {currentYear} Beth Arnold </p>
        </footer>
    )
};

export default Footer;