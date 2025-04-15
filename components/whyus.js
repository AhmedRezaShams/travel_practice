import React from 'react'
import Image from "next/image";

function Whyus(
    {
        color = "",
        title = "",
        paragraph = "",
        icon = ""
    }
) {
    return (
        <div
            className={`h-[284px] w-[573px] border rounded-2xl `}
            style={{
                backgroundColor: `rgba(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4, 6), 16)}, 0.2)`, // 20% opacity
                borderColor: `#${color}`,
            }}
        >
            <div className='h-[220px] w-[490px] p-8'>
                <Image
                    src={icon}
                    height={64}
                    width={64}
                    alt="Picture of the author"
                />
                <h1 className='font-mulish font-extrabold text-2xl text-black pb-3'>
                    {title}
                </h1>
                <p className='font-mulish font-normal text-[#5A5A5D] text-lg'>
                    {paragraph}
                </p>
            </div>
        </div>
    );
}

export default Whyus
