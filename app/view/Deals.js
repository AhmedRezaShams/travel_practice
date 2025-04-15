import Deals_discounts from '@/components/deals_discounts'
import React from 'react'
import Image from "next/image";

function Deals() {
    return (
        <div className='pt-6 justify-items-center'>
            <div className='w-[643] h-[126] pt-6 text-center '>
                <h1 className='font-mulish font-extrabold text-4xl pb-3 text-black'>
                    Deals & Discounts
                </h1>
                <div className='w-[643] h-[52] text-center'>
                    <p className='text-[#131318] font-normal text-lg opacity-30'>
                        Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.
                    </p>
                </div>
            </div>
            <div className='relative mx-auto mt-6 mb-6' >
                <Image
                    src="/lakeside.png"
                    height={500}
                    width={1170}
                    alt="Picture of the author"
                />
                <div className='absolute inset-0 content-center justify-items-end mr-10'>
                    <Deals_discounts title='' />
                </div>

            </div>
            <div className='relative mx-auto mt-6 mb-6' >
                <Image
                    src="/swimmingpool.png"
                    height={500}
                    width={1170}
                    alt="Picture of the author"
                />
                <div className='absolute inset-0 content-center justify-items-center '>
                    <Deals_discounts title='' />
                </div>

            </div>
            <div className='relative mx-auto mt-6 mb-6' >
                <Image
                    src="/poolwithhouse.png"
                    height={500}
                    width={1170}
                    alt="Picture of the author"
                />
                <div className='absolute inset-0 content-center justify-items-start ml-10'>
                    <Deals_discounts title='' />
                </div>

            </div>
        </div>
    )
}

export default Deals
