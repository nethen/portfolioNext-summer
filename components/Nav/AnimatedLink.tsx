import { motion } from 'framer-motion';
import Link from 'next/link';

const linkVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const AnimatedLink = ({
    children, href, target
    }:
    {
        children: string;
        href: string;
        target: string;
    }) => 
        href && (<motion.a 
            href={href} 
            target={target}
            whileTap="tap"
            whileHover="hover"
            variants={linkVariants}>{children}</motion.a>);

export default AnimatedLink;