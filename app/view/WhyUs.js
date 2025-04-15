import Whyus from '@/components/whyus'
import React from 'react'

function WhyUs() {
    return (
        <div  className=' justify-items-center'>
            <div className='w-[643] h-[126] pt-6 text-center '>
                <h1 className='font-mulish font-extrabold text-4xl pb-3 text-black'>
                    Why Choose Us
                </h1>
                <div className='w-[643] h-[52] text-center'>
                    <p className='text-[#131318] font-normal text-lg opacity-30'>
                        Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-4 pt-6'>

                <div className='col-span-2 p-3'>
                    <Whyus color={"FBB563"} title={"Haandpicked Hotels"} icon={"/hotel_icon.png"} paragraph={"Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. "} />
                </div>
                <div className='col-span-2 p-3'>
                    <Whyus color={"29CEF6"} title={"World Class Service"} icon={"/map_icon.png"} paragraph={"Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet.  "} />
                </div>
                <div className=' p-3 col-start-2 '>
                    <Whyus color={"E94444"} title={"Best Price Guarantee"} icon={"/price_icon.png"} paragraph={"Amet consectetur. Vulputate commodo felis molestie risus  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. "} />
                </div>



            </div>
        </div>
    )
}

export default WhyUs
