import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix"
            />
            <img
                className="nav__avatar"
                src="https://www.flaticon.com/svg/static/icons/svg/1177/1177568.svg"
                alt="Netflix"
            />
        </div>
    );
}

export default Nav;
