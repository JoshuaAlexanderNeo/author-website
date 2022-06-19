import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const Hero = () => {
  return (
    <div>
      <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
        {/* <Image
          alt='background'
          src={require('../../public/banner02.svg')}
          layout='fill'
          objectFit='cover'
          quality={100}
        /> */}
      </div>
    </div>
  )
}

export default Hero
