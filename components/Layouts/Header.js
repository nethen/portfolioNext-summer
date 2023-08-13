export const Header = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-14 lg:top-[5.5rem] md:pt-4 lg:pt-8 border-b border-grey-500 bg-white z-40 mb-4`}>
            <h2>{header}</h2>
            {children}
        </div>
    )
}

export const Header3 = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-14 lg:top-[5.5rem] md:pt-4 lg:pt-8 border-b border-grey-500 bg-white z-40 mb-4`}>
            <h3>{header}</h3>
            {children}
        </div>
    )
}