import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { CiUser } from 'react-icons/ci';


export const ContactMe = () => {

    return (
        <div className="cntctme">
            <form className="col-md-6">
                <div className="mb-2">
                    <label className="form-label">Name</label>
                    <div className="input-group">
                        <span className="input-group-text"><CiUser /></span>
                        <input type="text" className="form-control"
                            placeholder="Enter your name" />
                    </div>

                </div>
                <div className="mb-2">
                    <label className="form-label">E-mail</label>
                    <div className="input-group">
                        <span className="input-group-text"><HiOutlineMail /></span>
                        <input type="text" className="form-control"
                            placeholder="Enter your e-mail" />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="form-label">Message</label>
                    <textarea type="text" className="form-control"
                        placeholder="Write your message" />
                </div>

                <div className="text-center my-4">
                    <button className="secondaryBtn" type="submit">Submit <BsArrowRight /></button>
                </div>
            </form>
        </div>
    )
}