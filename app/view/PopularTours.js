import React from 'react'
import Image from 'next/image';

function PopularTours() {
    return (
        <div className='w-[1170] mx-auto pt-10'>
            <div className='flex'>
                <div className='h-[466] w-[577]'>
                    <h1 className='text-black font-extrabold fotn-mulish text-2xl '>Our Popular Tours</h1>
                    <p className='text-[#131318] opacity-30 space-y-3 '>
                        Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.
                        
                            <ul className='list-disc pl-5'>
                                <li >Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam odio neque diam. Sociis erat at .</li>
                                <li>Adipiscing ornare pellentesque mauris volutpat tortor vitae platea porta lacus. Lectus suspendisse nullam.</li>
                                <li> Accumsan eget et turpis praesent lorem egestas enim elit bibendum. Risus at in.</li>
                            </ul>
                    

                        Amet consectetur. Vulputate commodo felis molestie risus
                        ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. Id bibendum nunc senectus semper tincidunt.
                    </p>
                </div>
                <div>
                    <Image
                        src="/mountains.png"
                        alt="icon"
                        width={540} // Adjust width as needed
                        height={550} // Adjust height as needed
                        className="inline-block"
                    />
                </div>

            </div>
        </div>
    )
}

export default PopularTours
