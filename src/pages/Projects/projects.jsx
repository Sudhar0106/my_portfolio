import React, { useEffect, useState } from "react";
import { Card, CardBody, Modal, ModalBody } from "reactstrap";
import { Reveal } from "../../animate/reveal";
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai'
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

    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    const toggle = list => {
        setOpen(!open)
        setSelected(list);
    }

    useEffect(() => {
        Aos.init({ once: true })
    })

    const projectList = [
        {
            title: "Afrigo-Mall",
            link: "https://afrigomall.osiztech.com/",
            image: Afrigomall,
            concept: "An E-commerce website where the users can buy their products using Crypto currencies.",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration.",
            details: "An E-commerce website with 9 different crypto coins with respective tokens & 3 wallet connection management. In which, the user can either be a seller or a buyer. They can Sell & buy products with their crypto currencies."
        },
        {
            title: "Ludo King",
            link: "https://afrigomall.osiztech.com/",
            image: "",
            concept: "Ludo with unity integration, a player can play vs mode/tournament if available. The winner has been rewarded.",
            stack: "Reactjs | HTML | CSS | SASS | Unity integration | Metamask | Socket",
            details: "A player have to bet their ERC20 to play their role in vs mode/tournament. Once the match has been completed, the winners are announced & being rewarded. In case of tournament matches, the number of winners & winning percentage will be defined by admin before hosting a tournament."
        },
        {
            title: "GreenHeart",
            link: "https://afrigomall.osiztech.com/",
            image: "",
            concept: "An NFT project where the user can enroll as Manufacturers/farmers to create, BUY & SELL their NFT's & Products.",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "User can enroll as Manufacturers or farmers. The manufacturers are sellers, they'll sell their products on the market place. If admin gives authorization to their products, it'll be displayed depends on category & collections. If an user is a farmer they can create, buy, sell & bid their NFT's and they can even buy products through crypto currencies."
        },
        {
            title: "Dexa NFT",
            link: "https://barterera_mern.assetfinx.net/",
            image: Dexa,
            concept: "A simple NFT project where the user can Create, BUY and SELL their NFT's",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "A user can create, buy, sell & bid their NFT's. Each NFT has an unique signer to track their activities on blockchain, which is Dexa network. The coin initiated on it to buy & bidding purpose is BFIC and their respective token WBFIC (ETH - Erc20)."
        },
        {
            title: "Binasea NFT",
            link: "https://binaseafront.osiztech.com/",
            image: binasea,
            concept: "A simple NFT project where the user can BUY and SELL their NFT's",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "Admin will create an NFT signer hash on particular collection and a user can Buy & Sell their owned NFT's bought from Admin. The NFT transactions are tracked using phantom & solflaire wallet, each time the NFT is being configured it's Market increases gradually on thecontract."
        },
        {
            title: "Live-scores",
            link: "https://livescores.osiztech.com/",
            image: livescores,
            concept: "Instant update of certain sport scores, news, match status.",
            stack: "Reactjs | HTML | CSS | SASS | SSR | rapid API (3rd party) | i18next | Metamask",
            details: "It's a sports score updation project, which we use third party known as rapid API for an instant update of a result. Here we integrated 9 different games. It features news, articles and live coverage a matches including videos, text commentary, player stats, team rankings and odd values etc..,"
        },
        {
            title: "Bowo Defi",
            link: "https://bowo.osiztech.com/",
            image: Bowo,
            concept: "A De-centralized project where the user can Swap, Stake, Create BOND, create proposal and vote using own token.",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Contract integration | Metamask.",
            details: "A De-centralized project, in which a user can swap their USDT to get rewarded with own token and perform staking, proposal & create Bond. They'll receive a reward token depends on their investment & tokans."
        },
        {
            title: "Bowo Neo-banking",
            link: "https://bowoneobank.osiztech.com/",
            image: neobank,
            concept: "A payment gateway project, in which the user can convert their own token into USD according to Marketprice.",
            stack: "Reactjs | HTML | CSS | SASS | Redux | Sagas | Payment Gateway",
            details: "Where the user can convert their own token into USD which they rewarded in BOWO Defi and they can even perform smart transaction through Money gram payment gateway."
        },
        {
            title: "Rico Jogos",
            link: "https://ricojogos.osiztech.com/",
            image: rico,
            concept: "A multiple online gameing website, developed using Reactjs. User have Bet to play and win their points.",
            stack: "Reactjs | Javascript | HTML | CSS | SASS | Redux | Toolkit | i18next",
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
            <div className="row">
                {projectList.map((list, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card className="prjct">
                            <CardBody>
                                <Reveal>
                                    <p className="m-0 prtitle">{list.title}</p>
                                </Reveal>
                                <div className="prjctImg" data-aos="zoom-in" data-aos-duration="600">
                                    <img src={list.image || Noimage} className="img-fluid" />
                                </div>
                                <p className="font-14">{list.concept}</p>
                                <p className="font-12">{list.stack}</p>

                                <div className="my-4" data-aos="zoom-out" data-aos-duration="600">
                                    <button className="secondaryBtn w-100" onClick={() => toggle(list)}>
                                        Show more <BsArrowRight />
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal isOpen={open} centered size="lg">
                <ModalBody className="card">
                    <div className="">

                        <div className="d-flex justify-content-between">
                            <Reveal>
                                <h1 className="heading">{selected?.title}</h1>
                            </Reveal>
                            <button className="closeBtn" onClick={() => toggle(null)}>X</button>
                        </div>
                        <hr />

                        <div className="mdlDetail">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={selected?.image || Noimage} className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <h4>Concept</h4>
                                    <p>{selected?.concept}</p>
                                </div>
                            </div>
                            <h4>Details</h4>
                            <p>{selected?.details}</p>
                            <h4>Work Stack</h4>
                            <p>{selected?.stack}</p>

                            <div className="my-4 text-center">
                                <a className="secondaryBtn mx-2" href={selected?.link} target="_blank">
                                    View Demo <BsArrowUpRight />
                                </a>
                                <button className="primaryBtn mx-2" onClick={() => toggle(null)}>
                                    Close <AiOutlineCloseCircle />
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}