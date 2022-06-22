import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Books = () => {
  return (
    <div className='flex justify-center mb-12 mt-12'>
      <div className='w-10/12 items-center'>
        <h1 className='text-4xl float-right font-bold mb-4'>My Books</h1>
        <div className='w-full flex'>
          <Link href='/TiltingAtTorii'>
            <div className='border-1 rounded-lg shadow-2xl relative flex flex-row w-full cursor-pointer bg-white outline-none focus:outline-none'>
              <div className='aspect-[5/8] h-96 relative'>
                <Image
                  priority
                  layout='fill'
                  objectFit='cover'
                  src={require('../../public/covers/TiltingatTorii-cov-ebook.jpg')}
                />
              </div>
              {/*header*/}
              <div className='flex flex-col justify-between w-1/2 px-4 mt-10 content-center ml-10'>
                <div>
                  <div className='mb-10'>
                    <h1 className='mb-2 text-3xl font-semibold leading-tight'>Tilting at Torii</h1>
                    <p className='text-sm text-gray-700'>Lorem Ipsum</p>
                    <Link href='/TiltingAtTorii'>
                      <a className='focus:outline-none text-white bg-momiji hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2'>
                        More Info
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Books
