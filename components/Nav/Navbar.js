import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname();
    return(
        <header className="col-span-full h-fit fixed top-0 left-0 right-0 p-4 lg:p-8 bg-white z-50">
            <nav className="grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-8 ">
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex">
                    <Link href="/" className="">Nathan Lew</Link>
                </div>
                <p className="hidden sm:block sm:col-span-3 lg:col-span-2 text-theme-caption">Product designer</p>
                <div className="col-span-6 sm:col-span-3 flex justify-end col-end-13 sm:col-end-13">
                    <p className="text-theme-caption">{pathName}</p>
                </div>
                
            </nav>
        </header>
    );
}

export default Navbar;