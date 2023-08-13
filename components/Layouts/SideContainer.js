const SideContainer = ({ id, passRef, children }) => {
    return(
        <div className={`group mb-24`} id={id} ref={passRef}>
            { children }
        </div>
    )
}

export default SideContainer;