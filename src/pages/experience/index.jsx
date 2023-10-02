import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Reveal } from "../../animate/reveal";
import { FaAward } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export const Experience = () => {
    return (
        <div className="container">
            <div className="">
                <div className="section-title">
                    <span className="text-muted">Know about my</span>
                    <Reveal>
                        <h3>Work Experience</h3>
                    </Reveal>
                </div>
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#d91738", color: "#fff", borderRadius: "12px" }}
                    contentArrowStyle={{ borderRight: '7px solid  #ecf0f3' }}
                    date="Sep 2021 - Jan 2022"
                    iconStyle={{ background: '#d91738', color: '#fff' }}
                    icon={<MdWork />}
                >
                    <h4>Trainee Developer</h4>
                    <h6 className="font-bold">Osiz Technologies</h6>
                    <p>Trained as a MERN stack developer with multiple projects on web applications, blockchain and Defi conecpts with smart contract integration.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#d91738", color: "#fff", borderRadius: "12px" }}
                    contentArrowStyle={{ borderRight: '7px solid  #ecf0f3' }}
                    date="Jan 2022 - Present"
                    iconStyle={{ background: '#d91738', color: '#fff' }}
                    icon={<FaAward />}
                >
                    <h4>Programmer</h4>
                    <h6 className="font-bold">Osiz Technologies</h6>
                    <p>Worked as a Front-end developer. I'm expertise in, </p>

                    <ul className="font-12">
                        <li>Design and Implementing responsive UI for client websites.</li>
                        <li>Design, develop, and code web applications which are efficient and user friendly to use.</li>
                        <li>Writing and maintaining code that is clean, efficient, and easy to understand.</li>
                        <li>Testing web applications to ensure they are bug-free and work seamlessly for the end-users.</li>
                    </ul>

                    <div className="">
                        <p>Awarded as a <FaAward /> Rockstar Rookie of the year 2022.</p>
                    </div>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    date="Looking forword"
                    iconStyle={{ background: '#d91738', color: '#fff' }}
                    icon={<MdWork />}
                /> */}

            </VerticalTimeline>
        </div>
    )
}