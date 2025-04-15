import React from 'react'
import Image from "next/image";

function DestinationsComp(
  {
    width = '',
    text = "",
    imagePath = ""
  }
) {
    return (
        <div className={`relative min-h-80 px-2`}>
            <Image
                src={imagePath}
                fill
                alt="Picture of the author"
                className='opacity-80 rounded-2xl bg-linear-90'
            />
            <div className={`absolute inset-0 items-center content-center `}>
                <h1 className='text-2xl font-extrabold text-center  text-white'>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default DestinationsComp
