'use client'
import Link from 'next/link';
import AnimLink from '/components/Nav/AnimLink';

const Footer = () => {
    // console.log(pathNameConv);
    return(
        <footer className="col-span-full h-fit p-4 lg:p-8 bg-white z-50 text-theme">
            <nav className="grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-8 ">
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex">
                    <Link href="/style" scroll={false}>Style guide</Link>
                </div>
                <p className="hidden sm:block sm:col-span-6 lg:col-span-6">
                    This site was coded in <AnimLink target="_blank" href="https://react.dev">React</AnimLink> and <AnimLink target="_blank" href="https://nextjs.org">NextJS</AnimLink>, with all styling pre-processed in <AnimLink target="_blank" href="https://tailwindcss.com">TailwindCSS</AnimLink>.
                    All content for this new site was taken from <AnimLink target="_blank" href="https://nathanlew.com">my previous portfolio</AnimLink>.
                    
                </p>
                <div className="col-span-6 sm:col-span-3 flex justify-end col-end-13 sm:col-end-13">
                    <Link href="https://github.com/nethen/portfolioNext-summer" scroll={false}>View in Github</Link>
                </div>
                
            </nav>
        </footer>
    );
}

export default Footer;