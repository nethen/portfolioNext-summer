'use client'
import useWindowDimensions from '@/hooks/useWindowDimensions';

const TextElement = (props, ...children) => {
    const viewport = useWindowDimensions();
    const types = {

    }

    return(
        <div className="mb-4">
            {props.type.toLowerCase() == "h1" && <h1>{props.text}</h1>}
            {props.type.toLowerCase() == "h2" && <h2>{props.text}</h2>}
            {props.type.toLowerCase() == "h3" && <h3>{props.text}</h3>}
            {props.type.toLowerCase() == "h4" && <h4>{props.text}</h4>}
            {(props.type.toLowerCase() == "p" || props.type.toLowerCase() == "paragraph") && <p>{props.text}</p>}
            <div className="flex gap-x-4 opacity-30">
                <span>{ props.type }</span>
                <span>{props.size}rem</span>
            </div>
        </div>
    )
}

export default TextElement;