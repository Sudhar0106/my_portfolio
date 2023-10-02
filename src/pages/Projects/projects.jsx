import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Reveal } from "../../animate/reveal";
import ArrowAnimate from '../../animate/arrow.json';
import { BsArrowRight } from 'react-icons/bs';
import Aos from 'aos';

// image
import Noimage from '../../assets/noimage.jpg';
import Afrigomall from '../../assets/projects/afrigo-mall.png';
import Dexa from '../../assets/projects/dexa.png';
import binasea from '../../assets/projects/binase.png';
import livescores from '../../assets/projects/livescore.png';
import neobank from '../../assets/projects/neobank.png';
import rico from '../../assets/projects/rico.png';
import Bowo from '../../assets/projects/bowo.png';

export const Projects = () => {

    useEffect(() => {
        Aos.init({ once: true })
    })

    const projectList = [
        {
            title: "Afrigo-Mall",
            link: "https://afrigomall.osiztech.com/",
            image: Afrigomall,
            details: "An E-commerce website with 9 different crypto coins with respective tokens & 3 wallet connection management. In which, the user can either be a seller or a buyer. They can Sell & buy products with their crypto currencies."
        },
        {
            title: "Ludo King",
            link: "https://afrigomall.osiztech.com/",
            image: "",
            details: "An E-commerce website with 9 different crypto coins with respective tokens & 3 wallet connection management. In which, the user can either be a seller or a buyer. They can Sell & buy products with their crypto currencies."
        },
        {
            title: "Dexa NFT",
            link: "https://barterera_mern.assetfinx.net/",
            image: Dexa,
            details: "A user can create, buy, sell & bid their NFT's. Each NFT has an unique signer to track their activities on blockchain, which is Dexa network. The coin initiated on it to buy & bidding purpose is BFIC and their respective token WBFIC (ETH - Erc20)."
        },
        {
            title: "Binasea NFT",
            link: "https://binaseafront.osiztech.com/",
            image: binasea,
            details: "Admin will create an NFT signer hash on particular collection and a user can Buy & Sell their owned NFT's bought from Admin. The NFT transactions are tracked using phantom & solflaire wallet, each time the NFT is being configured it's Market increases gradually on thecontract."
        },
        {
            title: "GreenHeart",
            link: "https://afrigomall.osiztech.com/",
            image: "",
            details: "An E-commerce website with 9 different crypto coins with respective tokens & 3 wallet connection management. In which, the user can either be a seller or a buyer. They can Sell & buy products with their crypto currencies."
        },
        {
            title: "Live-scores",
            link: "https://livescores.osiztech.com/",
            image: livescores,
            details: "It's a sports score updation project, which we use third party known as rapid API for an instant update of a result. Here we integrated 9 different games which involves live score, summary, news, odd values etc..,"
        },
        {
            title: "Bowo Defi",
            link: "https://bowo.osiztech.com/",
            image: Bowo,
            details: "A De-centralized project which a user can swap their USDT to own token an perform staking, proposal & create Bond. They'll receive a reward token depends on their investment & tokans."
        },
        {
            title: "Bowo Neo-banking",
            link: "https://bowoneobank.osiztech.com/",
            image: neobank,
            details: "Where the user can convert their own token into USD which they rewarded in BOWO Defi and they can even perform smart transaction through Money gram payment gateway."
        },
        {
            title: "Rico Jogos",
            link: "https://ricojogos.osiztech.com/",
            image: rico,
            details: "A multiple online gameing website, a user have to bet their wallet amount to play. They can enroll on any game that are listed on the website,their rewards will be offered depends on their risk levels and the level of points where defined by admin."
        },

    ]

    return (
        <div className="container">
            <div className="section-title">
                <span className="text-muted">Visit my</span>
                <Reveal>
                    <h3>Projects</h3>
                </Reveal>
            </div>

            {projectList.map((list, index) => (
                <div key={index}>
                    <Card type="button" className="prjct mb-4">
                        <CardBody>
                            <div className="row">
                                <div className="col-md-4">

                                    <div className="prjctImg">
                                        <img src={list.image || Noimage} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Reveal>
                                        <p className="prtitle">{list.title}</p>
                                    </Reveal>
                                    <p>{list.details}</p>

                                    <div className="my-4" data-aos="fade-left" data-aos-duration="600">
                                        <a className="secondaryBtn" href={list.link} target="_blank">
                                            View Demo <BsArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    )
}