import React from 'react'
import Image from 'next/image'
import Colors from 'G:/travel_web/utils/colors.js'


function Header() {
    return (
        <div className='flex  py-12 justify-between content-between'>
            <div className='flex items-center'>
                <Image
                    src="/tracelicon.png"
                    width={48}
                    height={56}
                    alt="Picture of the author"
                />
                <h1 className="font-mulish font-extrabold text-4xl flex py-0.5" style={{ color: Colors.textPrimary }}>Hero <span style={{ color: Colors.primary }}>Travel</span></h1>
            </div>
            <div >
                <ul className='flex font-mulish font-bold text-xl gap-10 '>
                    <li style={{ color: Colors.primary }}>Home</li>
                    <li style={{ color: Colors.textSecondary }}>Packages</li>
                    <li style={{ color: Colors.textSecondary }}>Testimonial</li>
                    <li style={{ color: Colors.textSecondary }}>Blog</li>
                    <li style={{ color: Colors.textSecondary }}>Contact</li>

                </ul>

            </div>
        </div>
    )
}

export default Header
