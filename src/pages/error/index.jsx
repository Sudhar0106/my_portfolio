import Lottie from "lottie-react";
import React from "react";
import ErrorPage from '../../animate/error.json';
import { Link } from "react-router-dom";
import {HiArrowLeft} from 'react-icons/hi'

export const Eror404=()=>{

    return(
        <div className="errorPage">
            <Lottie animationData={ErrorPage}/>

            <div className="err404">
                <Link to="/" className="secondaryBtn w-100"><HiArrowLeft /> Go Back</Link>
            </div>
        </div>
    )
}