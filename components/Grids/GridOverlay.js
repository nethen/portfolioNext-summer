import React from "react";
import { motion, AnimatePresence } from "framer-motion"

const GridOverlay = ({isVisible}) => {
    const variants = {
        hidden: {
            opacity: 0
        }, 
        visible: {
            opacity: 0.05
        }

    }
    return(
        <AnimatePresence>
            {isVisible && (<motion.div 
                key="overlay"
                className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-8 px-4 lg:px-8 z-50"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden">
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
                <div className="bg-theme"></div>
            </motion.div>)}
          </AnimatePresence>
    )
}

export default GridOverlay;