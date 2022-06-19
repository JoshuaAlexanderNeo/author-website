import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-transparent '>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </div>
  )
}

const pages = ['Home', 'Books', 'About Me', 'Mailing List']
const navLinks = pages.map((page) => (
  <Link
    key={page}
    className='no-underline text-gray-600 lg:text-neutral-900 font-semibold hover:text-gray-300 '
    href={`#${page.toLowerCase().trim().split(/\s+/).join('-')}`}>
    {page}
  </Link>
))

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className='flex items-center justify-between p-4'>
    <div className='w-20'>
      <Image alt='background' src={require('../../public/maple.png')} quality={100} />
    </div>
    <nav className='hidden lg:block space-x-6'>{navLinks}</nav>
    <button
      type='button'
      aria-label='Toggle mobile menu'
      onClick={() => setMenuOpen(!menuOpen)}
      className='rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50'>
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
)

const MobileMenu = ({ children }) => (
  <nav className='p-4 flex flex-col absolute w-screen space-y-6 lg:hidden bg-white'>{children}</nav>
)

const MenuAlt4Svg = ({ menuOpen }) => (
  <>
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='menu'
      width='1em'
      height='1em'
      className={`transition text-gray-600 duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`}
      fill='currentColor'
      aria-hidden='true'>
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
    </svg>
  </>
)
