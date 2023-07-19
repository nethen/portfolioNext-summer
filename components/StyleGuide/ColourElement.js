const ColourElement = (props, ...children) => {
    return(
        <div className="mb-4">
            <div className="h-32 bg-black text-white p-2 mb-2">
              #FFFFFF
            </div>
            <div className="flex gap-x-4 opacity-30">
                <span>{ props.desc }</span>
            </div>
        </div>
    )
}

export default ColourElement;