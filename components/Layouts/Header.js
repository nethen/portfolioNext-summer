export const Header = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-14 md:pt-6 lg:pt-8 border-b border-grey-500 bg-white z-40`}>
            <h2>{header}</h2>
            {children}
        </div>
    )
}

export const Header3 = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-14 md:pt-6 lg:pt-8 border-b border-grey-500 bg-white z-40`}>
            <h3>{header}</h3>
            {children}
        </div>
    )
}


export const PaddedHeader = ({ header, sticky, children, }) => {
    return(
        <div className={`${sticky && 'sticky'} top-14 md:py-5 lg:py-2 lg:pt-16 border-b border-grey-500 bg-white z-40`}>
            <h2>{header}</h2>
            {children}
        </div>
    )
}