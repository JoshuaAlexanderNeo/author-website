import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero from '../components/Hero'
import MailingList from '../components/MailingList'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import ExitModal from '../components/ExitModal'
import ExitIntent from 'exit-intent'
import About from '../components/About'
import localforage from 'localforage'

export default function Home() {
  const [showExitModal, setShowExitModal] = useState(false)

  useEffect(() => {
    localforage.getItem('displayed').then((alreadyDisplayed) => {
      console.log(alreadyDisplayed)
      if (!alreadyDisplayed) {
        console.log('wtf')
        localforage.setItem('displayed', 'true')
        ExitIntent({
          threshold: 30,
          eventThrottle: 100,
          onExitIntent: () => {
            setShowExitModal(true)
          }
        })
      }
    })
  })

  return (
    <>
      <Head>
        <title>Leif Maplesson</title>
        <meta name='description' content='Author website for Leif Maplesson' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <script defer src='localforage/dist/localforage.js'></script>
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
