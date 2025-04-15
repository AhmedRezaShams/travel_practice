import React from 'react'
import Image from "next/image";
import IconButton from './button';

function Deals_discounts(
{
    title = "Tour To Satorini",
    paragraph = "Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing.",
}
) {
    return (
        <div className='w-[579] h-[389] border rounded-2xl border-white bg-white opacity-80'>
            <div className='w-[452] h-[289] p-10 '>
                <div className='w-[386] h-[24] flex  justify-between'>
                    <div className='flex w-[143] '>
                        <Image
                            src="/time.png"
                            height={24}
                            width={24}
                            alt="Picture of the author"
                        />
                        <h1 className='font-mulish font-normal text-[#5A5A5D] pl-2 text-lg'>
                            7 day/ night
                        </h1>
                    </div>
                    <div className='flex w-[96] '>
                        <Image
                            src="/people.png"
                            height={24}
                            width={24}
                            alt="Picture of the author"
                        />
                        <h1 className='font-mulish font-normal text-[#5A5A5D] pl-2 text-lg'>
                            Max: 10
                        </h1>
                    </div>
                    <div className='flex w-[99] '>
                        <Image
                            src="/location.png"
                            height={24}
                            width={24}
                            alt="Picture of the author"
                        />
                        <h1 className='font-mulish font-normal text-[#5A5A5D] pl-2 text-lg'>
                            Malaysia
                        </h1>
                    </div>

                </div>
                <div>
                    <h1 className='font-mulish font-extrabold text-2xl text-black pb-3 pt-3'>
                        {title}
                    </h1>
                    <p className='font-mulish font-normal text-[#5A5A5D] text-lg pt-3 pb-3'>
                        {paragraph}
                    </p>
                    <h1 className='text-xl font-mulish font-extrabold text-[#FF5400] pb-3'>
                        Price $1300-$1500
                    </h1>
                    <IconButton text={"Book Now"} height='52' width='150'/>
                </div>
            </div>
        </div>
    )
}

export default Deals_discounts
