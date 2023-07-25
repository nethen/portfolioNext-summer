const SideContainer = ({ id, ref, children }) => {
    return(
        <div className='pt-8 group mb-16' id={id} ref={ref}>
            { children }
        </div>
    )
}

export default SideContainer;