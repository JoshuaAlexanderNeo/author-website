import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { BounceLoader } from 'react-spinners'

const MailingList = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const emailIsValid = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      email: event.target.email.value
    }
    if (emailIsValid(data?.email)) {
      setLoading(true)

      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/ContentKit'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSONdata
      }

      const response = await fetch(endpoint, options)

      const result = await response.json()
      if (result === 'User Subscribed') {
        toast.success('Subscribed! Check your email.')
        setLoading(false)
        setSubmitted(true)
      } else {
        toast.warn('Could not subscribe user.')
        setLoading(false)
      }
    } else {
      toast.error('Invalid Email Address')
    }
  }

  const Thankyou = () => {
    return (
      <section
        id='mailing-list'
        className='flex flex-col w-full mx-auto overflow-hidden rounded-sm shadow-lg  md:flex-row md:h-64'>
        <div className='md:flex md:items-center md:justify-center w-full'>
          <div className='px-6 py-6 md:px-8 md:py-0'>
            <h2 className='text-3xl font-bold text-gray-700 text-center  pt-12'>Thanks for signing up!</h2>

            <p className='mt-2 text-md text-gray-600 mb-3'>
              Please check your email to confirm your subscription and claim your piece of the LEGEND
            </p>
          </div>
        </div>
      </section>
    )
  }

  const SubscribeForm = () => {
    return (
      <section
        id='mailing-list'
        className='flex flex-col w-full mx-auto overflow-hidden rounded-sm shadow-lg  md:flex-row md:h-64'>
        <div className='md:flex md:items-center md:justify-center w-full'>
          <div className='px-6 py-6 md:px-8 md:py-0'>
            <h2 className='text-3xl font-bold text-gray-700 text-center  pt-12'>Want a free short story?</h2>

            <p className='mt-2 text-md text-gray-600 mb-3'>
              Join the mailing list and bear witness to deeds of legend.
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  className='border-2 rounded-lg w-full h-12 px-4 mb-2'
                  type='text'
                  name='email'
                  placeholder='Email'
                  aria-label='Enter your email'
                />

                <button
                  type='submit'
                  className='bg-momiji hover:bg-red-800 block w-full text-white rounded-md font-semibold px-4 py-3 mb-12   first-letter:w-full'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const LoadingForm = () => {
    return (
      <section id='mailing-list' className=' h-52'>
        <div className='flex justify-center w-full mt-12'>
          <BounceLoader sizeUnit={'px'} size={150} color={'#123abc'} loading={loading} />
        </div>
      </section>
    )
  }

  return loading ? <LoadingForm /> : !submitted ? <SubscribeForm /> : <Thankyou />
}

export default MailingList
