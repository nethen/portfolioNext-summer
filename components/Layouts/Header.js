const Header = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-[3.5rem] md:py-5 lg:py-2 lg:pt-16 border-b border-grey-500 bg-white z-40`}>
            <h2>{header}</h2>
            {children}
        </div>
    )
}

export default Header;