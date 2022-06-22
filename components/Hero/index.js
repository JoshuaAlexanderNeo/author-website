import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className='container mx-auto h-screen contents lg:flex flex-col justify-end lg:flex-row lg:justify-between'>
        <div className='h-full flex flex-col w-full justify-center items-start pb-12 px-12 '>
          <h1 className='font-bold text-6xl mb-10 -ml-2 font-kaushan'>Tilting At Torii</h1>
          <p className='leading-normal italic text-lg font-bold'>
            Her potential was legendary. Her greatest obstacle? Convincing others of this fact.
          </p>
          <br />
          <p className='mb-8 font-orienta'>
            A young girl wakes up in the ashes of her family home. Her mother and brother are gone. Her father remains
            but seems to be missing something important—his head. After a one-sided conversation with her decapitated
            dad, the girl confabulates an identity and destiny for herself. She decides her name is ‘Chima,’ and that
            she is a master of the blade without parallel. With such delusions in mind, she goes off on a quixotic quest
            in search of her father’s head and to prove to the world that she is, indeed, the greatest warrior who ever
            lived.
          </p>
          <div>
            <Link href='https://www.amazon.com/dp/B0B2NBKGMY'>
              <a className='focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2'>
                BUY NOW on Amazon
              </a>
            </Link>
            <Link href='/TiltingAtTorii'>
              <a className='focus:outline-none text-white bg-momiji hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2'>
                More Info
              </a>
            </Link>
          </div>
        </div>

        <div className='sm:w-full sm:text-center self-center mb-12'>
          <Image
            priority
            placeholder='blur'
            alt='cover'
            src={require('../../public/covers/ebook-cover.png')}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
