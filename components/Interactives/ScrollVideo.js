'use client'
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react"

export const ScrollVideo = ({src}) => {
    const { scrollYProgress } = useScroll();
    const [hookedYPosition, setHookedYPosition] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })

    return (
        <motion.video 
        className="p-4 @sm:p-8 @lg:p-12"
        disablePictureInPicture playsInline muted autoPlay loop src={src}></motion.video>
    )
}