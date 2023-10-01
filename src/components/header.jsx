import React, { Fragment, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

import './style.scss';

const Header = () => {

    const sideNavbar = () => {
        let body = document.getElementById("collapse")
        body.classList.toggle("responsive-nav");
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let body = document.getElementById("scrollY")
            if (scrollY > 150) {
                body.classList.add("bg-light")
            } else body.classList.remove("bg-light")
        })

    }, [])

    return (
        <Fragment>
            <header className="navbar" id="scrollY">
                <div className="container" id="collapse">
                    <div className="nav-brand">
                        <FaBeer />
                    </div>
                    <div className="nav-collapse">
                        <ul className="nav-item">
                            <li className="nav-link">
                                Home
                            </li>
                            <li className="nav-link">
                                About us
                            </li>
                            <li className="nav-link">
                                Projects
                            </li>
                            <li className="nav-link">
                                Career
                            </li>
                            <li className="nav-link">
                                Contact
                            </li>
                        </ul>
                        <div className="nav-icons" onClick={sideNavbar}>
                            <HiMiniBars3BottomRight />
                        </div>
                        <div className="nav-close" onClick={sideNavbar}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </Fragment>
    )
}


export default Header;