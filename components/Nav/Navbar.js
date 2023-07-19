import Link from 'next/link';

const Navbar = () => {
    return(
        <header className="col-span-full h-fit fixed top-0 left-0 right-0 p-4 lg:p-8 bg-white z-50">
            <nav className="grid grid-cols-12 gap-x-2 lg:gap-x-4">
                <div className="col-span-6 sm:col-span-2 flex">
                    <Link href="/" className="">Nathan Lew</Link>
                </div>
                <p className="hidden sm:block sm:col-span-2 opacity-30">Product designer</p>
                <div className="col-span-6 sm:col-span-3 flex justify-end col-end-13 sm:col-end-13">
                    <Link href="style" className="">Style guide</Link>
                </div>
                
            </nav>
        </header>
    );
}

export default Navbar;