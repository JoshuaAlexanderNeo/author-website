import React from 'react'
const MY_FORM_ID = 3367018

const MailingList = () => {
  return (
    <section
      id='mailing-list'
      className='flex flex-col w-10/12 mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 mb-16'>
      <div className='md:flex md:items-center md:justify-center md:w-1/2 md:bg-slate-700 md:dark:bg-gray-800'>
        <div className='px-6 py-6 md:px-8 md:py-0'>
          <h2 className='text-lg font-bold text-gray-700 dark:text-white md:text-gray-100'>Want a free short story?</h2>

          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400'>
            Sign up for the LEGENDARY newsletter below and claim your copy today!
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center pb-6 md:py-0 md:w-1/2'>
        <form>
          <div className='flex flex-col p-1 overflow-hidden border rounded-lg bg-slate-50 dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            <input
              className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent'
              type='text'
              name='email'
              placeholder='Enter your email'
              aria-label='Enter your email'
            />

            <button className='px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-momiji rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MailingList
