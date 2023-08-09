const SideContainer = ({ id, passRef, children }) => {
    return(
        <div className={`group mb-32`} id={id} ref={passRef}>
            { children }
        </div>
    )
}

export default SideContainer;