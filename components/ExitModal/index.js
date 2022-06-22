import React, { useState } from 'react'
import MailingList from '../MailingList'
import Image from 'next/image'

const ExitModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-1/2 my-6 mx-auto max-w-6xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none'>
                <div className='h-[140] w-96 relative'>
                  <Image
                    priority
                    layout='fill'
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1609554009556-d64c7633eaca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  />
                </div>
                {/*header*/}
                <div className='flex flex-col justify-between w-1/2 px-4 mt-10 content-center ml-10'>
                  <div>
                    <div className='mb-10'>
                      <MailingList />
                    </div>
                    <span
                      className='absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100'
                      onClick={() => setShowModal(false)}>
                      close
                    </span>
                  </div>

                  {/*footer*/}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

export default ExitModal
