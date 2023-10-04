import React from "react";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoReact, BiLogoCss3 } from 'react-icons/bi';
import { RiJavascriptLine, RiBootstrapLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiSass, DiNpm } from 'react-icons/di'
import { GiFoxHead } from 'react-icons/gi'
import { FaNode } from 'react-icons/fa'
import { SiExpress, SiWalletconnect, SiMui } from 'react-icons/si'
import { BounceInDownButton } from "../../animate/bounce";


export const SkillList = () => {

    return (
        <div className="text-center my-md-5">
            <BounceInDownButton>
                <p>I'm a MERN stack developer with a track record of delivering
                    <br />scalable and efficient projects.
                </p>
            </BounceInDownButton>

            <div className="d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="skillLst" data-aos="zoom-in">
                            <RiJavascriptLine />
                            <p className="m-0">JavaScript</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <BiLogoReact />
                            <p className="m-0">Reactjs</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <RiBootstrapLine />
                            <p className="m-0">Bootstrap</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <AiOutlineHtml5 />
                            <p className="m-0">HTML</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <BiLogoCss3 />
                            <p className="m-0">CSS</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <DiSass />
                            <p className="m-0">SASS</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <FaNode />
                            <p className="m-0">Nodejs</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <SiMui />
                            <p className="m-0">MUI</p>
                        </div>

                        <div className="skillLst" data-aos="zoom-in">
                            <SiExpress />
                            <p className="m-0">Express</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <GiFoxHead />
                            <p className="m-0">Metamask</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <DiNpm />
                            <p className="m-0">npm</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <SiWalletconnect />
                            <p className="m-0">Wallet</p>
                        </div>
                        <div className="skillLst" data-aos="zoom-in">
                            <TbBrandNextjs />
                            <p className="m-0">Next.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}