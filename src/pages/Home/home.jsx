import React, { Fragment } from "react";
import { Reveal } from "../../animate/reveal";
import Lottie from 'lottie-react';
import Useranimate from '../../animate/developer.json';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin, BiLogoFacebookCircle, BiLogoReact } from 'react-icons/bi';
import { RiJavascriptLine, RiBootstrapLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb'
import { Progress } from "reactstrap";

const Home = () => {

    return (
        <Fragment>
            <div className="main-content">
                <section className="banner_sec">
                    <div className="container sectionOne">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <Reveal>
                                    <div className="title">
                                        <p>Hi there, i'm</p>
                                        <p className="main-text">SUDHARSAN</p>
                                        <div className="static-txts">
                                            <p>I am a</p>
                                            <ul className="dynamix-txts">
                                                <li><span>Developer.</span></li>
                                                <li><span>Designer.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                                <p>Web designer and developer with 2 years of experience.</p>

                                <div className="social_link">
                                    <div className="icon">
                                        <div className="card-body social_icon">
                                            <AiFillGithub />
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <div className="card-body social_icon">
                                            <BiLogoLinkedin />
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <div className="card-body social_icon">
                                            <BiLogoFacebookCircle />
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <div className="card-body social_icon">
                                            <AiOutlineInstagram />
                                        </div>
                                    </div>
                                </div>
                                <button className="primaryBtn mt-3">Download CV</button>
                            </div>

                            <div className="col-md-5">
                                <Lottie animationData={Useranimate} />
                            </div>
                        </div>
                    </div>

                    <section className="sectionTwo">
                        <div className="container">
                                    <Reveal>
                                        <div className="heading">
                                            <h1>Professional <span>Skills</span></h1>
                                        </div>
                                    </Reveal>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="d-flex flex-wrap">
                                        <div className="skillLst">
                                            <RiJavascriptLine />
                                            <p className="m-0">JavaScript</p>
                                        </div>
                                        <div className="skillLst">
                                            <BiLogoReact />
                                            <p className="m-0">Reactjs</p>
                                        </div>
                                        <div className="skillLst">
                                            <TbBrandNextjs />
                                            <p className="m-0">Next.js</p>
                                        </div>
                                        <div className="skillLst">
                                            <RiBootstrapLine />
                                            <p className="m-0">Bootstrap</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 card">
                                    <div className="card-body">
                                        <div className="Skilllvl">
                                            <div className="d-flex justify-content-between">
                                                <p>JavaScript</p>
                                                <p>100%</p>
                                            </div>
                                            <Progress value={50} />
                                        </div>
                                        <div className="Skilllvl">
                                            <div className="d-flex justify-content-between">
                                                <p>Reactjs</p>
                                                <p>60%</p>
                                            </div>
                                            <Progress value={70} />
                                        </div>
                                        <div className="Skilllvl">
                                            <div className="d-flex justify-content-between">
                                                <p>Design</p>
                                                <p>60%</p>
                                            </div>
                                            <Progress value={70} />
                                        </div>
                                        <div className="Skilllvl">
                                            <div className="d-flex justify-content-between">
                                                <p>Nextjs</p>
                                                <p>60%</p>
                                            </div>
                                            <Progress value={70} />
                                        </div>
                                        <div className="Skilllvl">
                                            <div className="d-flex justify-content-between">
                                                <p>React Typescript</p>
                                                <p>30%</p>
                                            </div>
                                            <Progress value={30} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Fragment>
    )
}


export default Home;