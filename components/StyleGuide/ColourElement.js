const ColourElement = (props, ...children) => {
    return(
        <div className="mb-8">
            <div className={`h-32 bg-theme ${props.darkText ? 'text-theme-caption' : 'text-white'} p-2 mb-2`} style={{background: props.colour}}>
              {props.colour || "#615245"}
            </div>
            <div className="flex gap-x-4 text-theme-caption">
                <span>{ props.desc }</span>
            </div>
        </div>
    )
}

export default ColourElement;