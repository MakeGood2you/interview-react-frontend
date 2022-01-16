import Image from 'next/image'
import React from "react";

const myLoader = ({src, width, quality}) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const MyImage = ({src}) => {
    return (
            <Image
                loader={myLoader}
                src={src}
                alt="Picture of the author"
                width={500}
                height={500}
            />

    )
}

export default MyImage