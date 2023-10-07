import React, { Fragment, useEffect, useState } from "react";
import { Reveal } from "../../animate/reveal";
import Lottie from 'lottie-react';
import Useranimate from '../../animate/developer.json';
import ScrollAnimate from '../../animate/scroll.json';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin, BiLogoFacebookCircle } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import Aos from 'aos';
import Picture from '../../assets/pic.png'

import { Experience } from "../experience";
import { SkillList } from "../skilllist";
import { ContactMe } from "../contact";
import { Footer } from "../../components/footer";
import { Skills } from "../skills";
import { Projects } from "../Projects/projects";
import { BounceInDownButton } from "../../animate/bounce";
import LoadingOverlay from 'react-loading-overlay';
import { Pageloader } from "../loader";
import Header from "../../components/header";

const Home = () => {

    const [loading, setLoading] = useState(false);
    const emailAddress = 'sudharsan2704@gmail.com';

    useEffect(() => {
        Aos.init({ once: true, duration: 500 })
    }, [])

    return (
        <Fragment>
            <LoadingOverlay
                active={loading}
                spinner={<Pageloader />}
            >
                <Header />
                <div className="main-content" id="home">
                    <section className="banner_sec animated_div">
                        <div className="container sectionOne">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <BounceInDownButton>
                                        <div className="title">
                                            <Reveal>
                                                <p>Hello, i'm</p>
                                            </Reveal>
                                            <Reveal>
                                                <p className="main-text">SUDHARSAN</p>
                                            </Reveal>
                                            <div className="static-txts">
                                                <p>I'm into </p>
                                                <ul className="p-0 dynamix-txts">
                                                    <li><span>web Development.</span></li>
                                                    <li><span>web Designing.</span></li>
                                                    <li><span>Blockchain integration.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-8 font-14">
                                            <p>I am a MERN developer and designer with 2 years of experience and astonishing skills.
                                                I'm always looking for new challenges,
                                                to push my skills to the next level.
                                            </p>
                                        </div>

                                        <div className="social_link">
                                            <a href="https://github.com/Sudhar0106" target="_blank" data-aos="fade-left" data-aos-duration="200">
                                                <div className="icon">
                                                    <AiFillGithub />
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/sudharsan-s-7647a81b5" target="_blank" data-aos="fade-left" data-aos-duration="400">
                                                <div className="icon">
                                                    <BiLogoLinkedin />
                                                </div>
                                            </a>
                                            <a href="https://github.com/Sudhar0106" target="_blank" data-aos="fade-left" data-aos-duration="600">
                                                <div className="icon">
                                                    <BiLogoFacebookCircle />
                                                </div>
                                            </a>
                                            <a href="https://instagram.com/sudharsan_2704?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" data-aos="fade-left" data-aos-duration="800">
                                                <div className="icon">
                                                    <AiOutlineInstagram />
                                                </div>
                                            </a>
                                            <a href={`https://mail.google.com/mail/u/0/?fs=1&to=${emailAddress}&su=SUBJECT&body=BODY&bcc=${emailAddress}&tf=cm`} target="_blank" data-aos="fade-left" data-aos-duration="1000">
                                                <div className="icon">
                                                    <HiOutlineMail />
                                                </div>
                                            </a>
                                        </div>
                                    </BounceInDownButton>
                                </div>

                                <div className="col-md-5">
                                    <div className="" data-aos="zoom-in">
                                        <Lottie animationData={Useranimate} />
                                    </div>
                                </div>
                            </div>
                            <div className="scrollAr" data-aos="fade-down" data-aos-duration="800">
                                <Lottie animationData={ScrollAnimate} />
                                Scroll Down
                            </div>
                        </div>
                    </section>

                    <section className="sectionTwo animated_div" id="aboutme">
                        <div className="container py-5">
                            <div className="row align-items-center">
                                <div className="col-md-6 d-none d-md-block">
                                    <div className="myPic">
                                        <div className="inner" data-aos="fade-up" data-aos-duration="800">
                                            <img src={Picture} className="bounce Portfolio img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="section-title">
                                        <span className="text-muted">Get to know</span>
                                        <Reveal>
                                            <h3>About me</h3>
                                        </Reveal>
                                    </div>
                                    <BounceInDownButton>
                                        <div className="font-14">
                                            <p>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and applications expertise in HTML, CSS, SASS, JavaScript, reactjs and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs. With a deep understanding of front-end development best practices, I am an innovative developer experienced in Reactjs.
                                            </p>

                                            <p>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also, Worked on De-centralized projects utilizing the knowledge of Blockchain & unity integration such as Swap, Liquidity, Stake, NFT, voting, proposal, gaming etc,.
                                            </p>
                                        </div>
                                    </BounceInDownButton>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionThree animated_div" id="skills">
                        <div className="container">

                            <div className="section-title">
                                <span className="text-muted">Know about my</span>
                                <Reveal>
                                    <h3>Professional Skills</h3>
                                </Reveal>
                            </div>
                            <BounceInDownButton>
                                <Skills />
                            </BounceInDownButton>
                        </div>
                    </section>
                    <hr />

                    <section id="experience" className="animated_div">
                        <Experience />
                    </section>
                    <hr />

                    <section id="projects" className="animated_div">
                        <Projects />
                    </section>
                    <hr />

                    <section className="sectionThree animated_div" id="additional">
                        <div className="container">
                            <div className="section-title">
                                <span className="text-muted">Know about my</span>
                                <Reveal>
                                    <h3>Work Skills</h3>
                                </Reveal>
                            </div>

                            <SkillList />
                        </div>
                    </section>

                    <div className="cntct-sec animated_div" id="contact">
                        <div className="container">
                            <div className="section-title">
                                <span className="text-muted">Get in touch</span>
                                <Reveal>
                                    <h3>Contact me</h3>
                                </Reveal>
                            </div>
                            <ContactMe setLoading={setLoading} />
                        </div>
                    </div>
                </div >

                <Footer />
            </LoadingOverlay>
        </Fragment >
    )
}


export default Home;