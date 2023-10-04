import React from "react";
import { Progress } from "reactstrap";
import { BounceInDownButton } from "../../animate/bounce";

export const Skills = () => {

    return (
        <div className="row">
            <div className="col-md-6">
                <BounceInDownButton>
                    <ul className="font-14">
                        <li>Developing and maintaining web applications that are optimised for various devices and browsers
                        </li>
                        <li>Implementing responsive design and cross-browser compatibility for different screen sizes.</li>
                        <li>Developing user-friendly and interactive web features such as buttons, forms, and menus
                            Using JavaScript libraries and frameworks  to build complex web applications and interactive features.</li>
                        <li>Writing and maintaining code that is clean, efficient, and easy to understand</li>
                        <li>Testing web applications to ensure they are bug-free and work seamlessly for the end-users.</li>
                        <li>Good understanding of SEO principles and ensuring that application will adhere to them.
                        </li>
                    </ul>
                </BounceInDownButton>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="Skilllvl">
                            <div className="d-flex justify-content-between">
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <Progress value={80} />
                        </div>
                        <div className="Skilllvl">
                            <div className="d-flex justify-content-between">
                                <p>Reactjs</p>
                                <p>90%</p>
                            </div>
                            <Progress value={90} />
                        </div>
                        <div className="Skilllvl">
                            <div className="d-flex justify-content-between">
                                <p>Web Design</p>
                                <p>100%</p>
                            </div>
                            <Progress value={100} />
                        </div>
                        <div className="Skilllvl">
                            <div className="d-flex justify-content-between">
                                <p>Nextjs</p>
                                <p>40%</p>
                            </div>
                            <Progress value={40} />
                        </div>
                        <div className="Skilllvl">
                            <div className="d-flex justify-content-between">
                                <p>Nodejs</p>
                                <p>50%</p>
                            </div>
                            <Progress value={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}