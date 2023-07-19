'use client'
import React from "react";
import { useState, useEffect } from "react";

const ImageGrid = (props) => {
    const [variant, setVariant] = useState(undefined);
    useEffect(() => {
        setVariant(Math.floor(Math.random() * 6));
    }, [])

    const test = () => {
        if (variant < 6) setVariant(variant + 1);
        else setVariant(0);
        console.log(variant);
    }
    return(
        <div className="grid grid-cols-6 gap-x-2 lg:gap-x-4  my-2 lg:my-4">
            {variant < 4 && <div className={`${variant % 2 == 0 ? 'col-span-4' : 'col-span-2'} h-32 bg-black`}></div>}
            {variant >= 2 && <div className={`${variant % 2 == 1 ? 'col-span-4' : 'col-span-2'} col-end-7 h-32 bg-black`}></div>}
        </div>
    )
}

export default ImageGrid;