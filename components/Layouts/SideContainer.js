const SideContainer = ({ id, passRef, paddingTop, children }) => {
    return(
        <div className={`${paddingTop && `pt-8`} group mb-32`} id={id} ref={passRef}>
            { children }
        </div>
    )
}

export default SideContainer;