import React from 'react'
const MY_FORM_ID = 3367018

const MailingList = () => {
  return (
    <section
      id='mailing-list'
      className='flex flex-col w-full mx-auto overflow-hidden rounded-sm shadow-lg  md:flex-row md:h-64'>
      <div className='md:flex md:items-center md:justify-center w-full'>
        <div className='px-6 py-6 md:px-8 md:py-0'>
          <h2 className='text-3xl font-bold text-gray-700 text-center  pt-12'>Want a free short story?</h2>

          <p className='mt-2 text-md text-gray-600 mb-3'>Join the mailing list and bear witness to deeds of legend.</p>
          <div>
            <input
              className='border-2 rounded-lg w-full h-12 px-4 mb-2'
              type='text'
              name='email'
              placeholder='Email'
              aria-label='Enter your email'
            />

            <button className='bg-momiji hover:bg-red-800 block w-full text-white rounded-md font-semibold px-4 py-3 mb-12   first-letter:w-full'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MailingList
