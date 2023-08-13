import { circOut, motion } from 'framer-motion';

const linkVariants = {
    recolor: {color: "#615245"}
}

const AnimLink = ({children, href, target, className}) => 
        href && (<motion.a 
            className={`text-theme-caption ${className}`}
            href={href} 
            target={target}
            whileTap="tap"
            whileHover="recolor"
            transition={{
                ease: circOut,
                duration: 0.3
            }}
            variants={linkVariants}>{children}</motion.a>);

export default AnimLink;