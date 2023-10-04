import React, { Fragment, useEffect, useRef } from "react";
import logo from '../assets/sudharsan.jpg';
import { Link, Outlet } from "react-router-dom";
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

import './style.scss';
import Aos from "aos";

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

        Aos.init({duration : 600})

    }, [])

    const scroll = () => {
        sideNavbar();
        window.scrollTo(0, 0)
    }

    return (
        <Fragment>
            <header className="navbar" id="scrollY" data-aos="fade-down">
                <div className="container" id="collapse">
                    <div className="nav-brand">
                        <Link to='/'>
                            <div className="d-flex align-items-center">
                                <img src={logo} className="img-fluid m-2" />
                                <span>SUDHAR</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-collapse">
                        <ul className="nav-item">
                            <li className="nav-link" onClick={scroll}>
                                <Link to='/'>Home</Link>
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