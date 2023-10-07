import Lottie from "lottie-react";
import React from "react";
import LoaderJson from '../animate/loader.json';

export const Pageloader = () => {

    return (
        <div className="pageLoader">
            <div className="loader w-50">
                <Lottie animationData={LoaderJson} />
                <p>Please wait ...</p>
            </div>
        </div>
    )
}