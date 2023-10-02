import React, { Fragment, useEffect, useRef } from "react";
import logo from '../assets/logo.png';
import { Outlet } from "react-router-dom";
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
            if (scrollY > 80) {
                body.classList.add("bg-light")
            } else body.classList.remove("bg-light")
        })

    }, [])

    const scroll = () => {
        sideNavbar();
        window.scrollTo(0, 0)
    }

    return (
        <Fragment>
            <header className="navbar" id="scrollY">
                <div className="container" id="collapse">
                    <div className="nav-brand">
                        <img src={logo} width={150} className="img-fluid" />
                    </div>
                    <div className="nav-collapse">
                        <ul className="nav-item">
                            <li className="nav-link" onClick={scroll}>
                                <a>Home</a>
                            </li>
                            <li className="nav-link" onClick={sideNavbar}>
                                <a href="#aboutme">
                                    About me
                                </a>
                            </li>
                            <li className="nav-link" onClick={sideNavbar}>
                                <a href="#experience">
                                    Experience
                                </a>
                            </li>
                            <li className="nav-link" onClick={sideNavbar}>
                                <a href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li className="nav-link" onClick={sideNavbar}>
                                <a href="#skills">
                                    skills
                                </a>
                            </li>
                            <li className="nav-link" onClick={sideNavbar}>
                                <a href="#contact">
                                    Contact
                                </a>
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