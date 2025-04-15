import DestinationsComp from '@/components/destinations'
import React from 'react'

function Destinations() {
    return (
        <div className=' py-8'>
            <div className='justify-items-center '>
                <h1 className='text-4xl font-mulish text-black font-extrabold '>
                    Chose Your Destinations
                </h1>
                <div className='w-[643] py-3'>
                    <p className='text-lg text-gray-500 text-center '>
                        Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.F
                    </p>
                </div>

            </div>

            <div className='pt-6 grid grid-cols-12 gap-4'>
                <div className=' col-span-6  '>
                    <DestinationsComp text='Maldives' width='573' imagePath='/maldives.png' />
                </div>
                <div className=' col-span-6  '>
                    <DestinationsComp text='Indonesia' width='573' imagePath='/indonesia.png' />

                </div>

                <div className=' col-span-4'>
                    <DestinationsComp text='Srilanka' width='573' imagePath='/srilanka.png' />
                </div>
                <div className=' col-span-4'>
                    <DestinationsComp text='North America' width='573' imagePath='/northAmerica.png' />

                </div>
                <div className='col-span-4'>
                    <DestinationsComp text='Kashmir' width='573' imagePath='/kashmir.png' />
                </div>
                <div className=' col-span-5 '>
                    <DestinationsComp text='Bangladesh' width='573' imagePath='/bd.png' />

                </div>
                <div className=' col-span-7 '>
                    <DestinationsComp text='Bandarban' width='573' imagePath='/bandarban.png' />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Destinations
