const SideContainer = ({ id, passRef, children }) => {
    return(
        <div className='pt-8 group mb-16' id={id} ref={passRef}>
            { children }
        </div>
    )
}

export default SideContainer;