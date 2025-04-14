import React from 'react'
import Image from "next/image";
import Colors from '@/utils/colors';
import IconButton from '@/components/button';

function Hero() {
    return (
        <div className=' relative w-[1170px] h-[500px] mx-auto'>
            <Image
                src="/lakeside.png"
                height={500}
                width={1170}
                alt="Picture of the author"
                className='opacity-80 rounded-2xl bg-linear-90'

            />
            <div className='absolute inset-0 bg-gradient-to-b from-[#131318] to-transparent content-center justify-center justify-items-center'>
                <h1 className='text-6xl font-mulish'>
                    Explore Your Jurney
                </h1>
                <div className='w-200 text-center'>
                    <p className='font-mulish text-xl text-gray-100' >
                        Dolor sit amet consectetur. Nullam suspendisse vitae ultricies dolor adipiscing. In et odio enim ac quis sapien urna eu phasellus.
                    </p>
                </div>
                <div className='flex h-20 w-[800px] rounded-lg  items-center relative'>
                    {/* Semi-transparent background */}
                    <div className='absolute inset-0 bg-white rounded-lg opacity-20'></div>

                    {/* Input field container */}
                    <div className='relative z-10'>
                        <input
                            type="text"
                            placeholder="Where go"
                            className="w-[174px] h-[52px] px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 shadow-md border border-gray-200 outline-none focus:ring-2 m-4"
                        />
                    </div >
                    <div className='relative z-10'>
                        <select
                            id="dropdown"
                            className="w-[174px] h-[52px] px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 shadow-md border border-gray-200 outline-none focus:ring-2 m-4"
                        >
                            <option value="" disabled className='text-[#a0a0a0] opacity-50' >
                                When
                            </option>
                            <option value="pizza">Pizza</option>
                            <option value="burger">Burger</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                    <div className='relative z-10'>
                        <select
                            id="dropdown"
                            className="w-[174px] h-[52px] px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 shadow-md border border-gray-200 outline-none focus:ring-2 m-4"
                        >
                            <option value="" disabled className='text-[#a0a0a0] opacity-50' >
                                Select Type
                            </option>
                            <option value="pizza">Pizza</option>
                            <option value="burger">Burger</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                    <div className='relative z-10'>
                        <IconButton width='w-42' height='h-13' text={'Find Now'} icon={'/vector.png'}/>
                    </div>
                </div>




                <div>

                </div>
            </div>

        </div>
    )
}

export default Hero
