import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";


export const BounceInDownButton = (props) => {

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start({ opacity: 1, y: 0 });
        }
    }, [isInview])

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={mainControls}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.3 }}
                {...props}
            />
        </div>
    )
}