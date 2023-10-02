import React from "react";
import { BsArrowRight } from 'react-icons/bs';


export const ContactMe = () => {

    return (
        <div className="cntctme">
            <form className="col-md-6">
                <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        placeholder="Enter your name" />
                </div>
                <div className="mb-2">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control"
                        placeholder="Enter your e-mail" />
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