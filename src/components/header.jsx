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

        Aos.init({ duration: 600 })

    }, [])

    const scroll = (divId) => {

        if (divId) {
            const element = document.getElementById(divId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else window.scrollTo(0, 0)
        sideNavbar();
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
                            <li className="nav-link" onClick={()=>scroll(null)}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="nav-link" onClick={() => scroll("aboutme")}>
                                <span>
                                    About me
                                </span>
                            </li>
                            <li className="nav-link" onClick={() => scroll("experience")}>
                                <span>
                                    Experience
                                </span>
                            </li>
                            <li className="nav-link" onClick={() => scroll("projects")}>
                                <span>
                                    Projects
                                </span>
                            </li>
                            <li className="nav-link" onClick={() => scroll("additional")}>
                                <span>
                                    skills
                                </span>
                            </li>
                            <li className="nav-link" onClick={() => scroll("contact")}>
                                <span>
                                    Contact
                                </span>
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