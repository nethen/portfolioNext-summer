'use client'
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGrid = (props) => {
    const [variant, setVariant] = useState(props.variant ? props.variant : undefined);
    useEffect(() => {
        if(variant == undefined) setVariant(Math.floor(Math.random() * 6));
    }, [])

    const test = () => {
        if (variant < 6) setVariant(variant + 1);
        else setVariant(0);
        console.log(variant);
    }
    return(
        <motion.div className="grid grid-cols-6 gap-x-2 lg:gap-x-4 my-2 lg:my-4" onClick={test}>
            <AnimatePresence>
                {variant < 4 && 
                <motion.div 
                className={`${variant % 2 == 0 ? 'col-span-4 h-48' : 'col-span-2 h-32'} bg-black`}
                initial={{
                    height: 0,
                    columnSpan: 0
                }}
                animate={{
                    height: variant % 2 == 0 ? "8rem" : "4rem",
                    columnSpan: variant % 2 == 0 ? 4 : 2,

                }}
                exit={{
                    height: 0,
                    columnSpan: 0
                }}
                >
                </motion.div>}
                {variant >= 2 && <motion.div className={`${variant % 2 == 1 ? 'col-span-4 h-48' : 'col-span-2 h-32'} col-end-7 bg-black`}></motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default ImageGrid;