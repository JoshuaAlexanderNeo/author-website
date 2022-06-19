import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const Hero = () => {
  return (
    <>
      <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
        {/* <Image
          alt='background'
          src={
            'https://images.unsplash.com/photo-1574076284060-73793f8cd9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
          layout='fill'
          objectFit='cover'
          quality={100}
        /> */}
      </div>
      <div className='container mx-auto flex flex-col md:flex-row justify-center gap-64 py-20'>
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-start pt-16 pb-24 px-12'>
          <h1 className='font-bold text-3xl'>Tilting At Torii</h1>
          <p className='leading-normal mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tortor hendrerit nisi condimentum, id
            consectetur leo varius. Integer molestie semper diam, et mollis sem interdum nec. Donec scelerisque placerat
            est interdum hendrerit. Vestibulum eu nibh et turpis vehicula tincidunt in ut leo. Curabitur tellus risus,
            ultrices sit amet venenatis nec, consequat ac mi. Sed luctus arcu eget augue molestie, a maximus urna
            facilisis.
          </p>
          <button className='bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent'>
            Buy Now
          </button>
        </div>

        <div className='w-full lg:w-1/4 text-center'>
          <Image alt='cover' src={require('../../public/covers/TiltingatTorii-paperback.png')} quality={100} />
        </div>
      </div>

      <div className='bg-white h-screen'>
        <div className='container mx-auto pt-24 md:pt-16 px-6'>
          <p className='py-4'>
            <i className='em em-wave'></i> <i class='em em-world_map'></i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero
