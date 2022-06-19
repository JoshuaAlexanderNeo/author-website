import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const Hero = () => {
  return (
    <>
      <div className='container mx-auto h-screen flex flex-col md:flex-row justify-center ml-40'>
        <div className='flex flex-col w-full justify-center items-start pb-24 px-12'>
          <h1 className='font-bold text-5xl mb-10'>Tilting At Torii</h1>
          <p className='leading-normal mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tortor hendrerit nisi condimentum, id
            consectetur leo varius. Integer molestie semper diam, et mollis sem interdum nec. Donec scelerisque placerat
            est interdum hendrerit. Vestibulum eu nibh et turpis vehicula tincidunt in ut leo. Curabitur tellus risus,
            ultrices sit amet venenatis nec, consequat ac mi. Sed luctus arcu eget augue molestie, a maximus urna
            facilisis.
          </p>
          <a
            className='focus:outline-none text-white bg-momiji hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            href='https://www.amazon.com/dp/B0B2NBKGMY'>
            BUY NOW on Amazon
          </a>
        </div>

        <div className='w-full text-center relative -mt-40'>
          <Image
            alt='cover'
            src={require('../../public/covers/two-covers.png')}
            layout='fill'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>

      <div className='bg-white h-screen'>
        <div className='container mx-auto pt-24 md:pt-16 px-6'>
          <p className='py-4'>
            <i className='em em-wave'></i> <i className='em em-world_map'></i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero
