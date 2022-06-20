import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from '../components/Hero'
import MailingList from '../components/MailingList'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import ExitModal from '../components/ExitModal'
import ExitIntent from 'exit-intent'
import About from '../components/About'

export default function Home() {
  const [showExitModal, setShowExitModal] = useState(false)
  const [exitIntentShown, setExitIntentShown] = useState(0)

  useEffect(() => {
    const removeExitIntent = ExitIntent({
      threshold: 30,
      maxDisplays: 1,
      eventThrottle: 100,
      onExitIntent: () => {
        if (exitIntentShown < 1) {
          setShowExitModal(true)
          setExitIntentShown((prev) => prev + 1)
        }
      }
    })
    return () => {
      removeExitIntent()
    }
  })
  return (
    <>
      <Head>
        <title>Leif Maplesson</title>
        <meta name='description' content='Author website for Leif Maplesson' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Orienta&family=Overpass:ital@1&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='bg-slate-50'>
        <ResponsiveNavBar />
        <Hero />
      </div>
      <About />
      <MailingList />
      <ExitModal showModal={showExitModal} setShowModal={setShowExitModal} />
    </>
  )
}
