import Link from 'next/link'
import KofiButton from 'kofi-button'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about-me' className='bg-gray-800'>
      <div className='container px-6 py-8 mx-auto justify-between lg:flex'>
        <div className='lg:flex justify-between w-full items-center '>
          <div className='lg:w-1/2'>
            <h2 className='text-4xl font-bold font-orienta text-gray-100'>Who I am</h2>

            <div className='mt-4 text-gray-200 lg:max-w-1/2 font-orienta'>
              <p className='text-base font-light leading-relaxed mt-0 mb-0 italic text-gray-200'>
                “Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of
                his mind.”
              </p>
              <footer className='block text-gray-400 mb-10'>― Miguel de Cervantes, Don Quixote</footer>

              <p>
                Leif Maplesson was born in a city named after a bridge. When he was a teenager, he wrote a short story
                about jumping from said bridge. This garnered him no literary fame but did earn him a one-on-one
                exclusive interview with the school counsellor. He’s been in love with writing ever since. He has been
                boxing with the Japanese language for the better part of a decade. Sure, his tango with <i>nihongo</i>{' '}
                has left him pummelled flat like <i>mochi</i>, but he hasn’t heard no bell. (His ears swelled shut a
                long time ago. Don’t tell him the fight was over before it began. He still thinks he has a chance.) He
                can be reached at:{' '}
                <Link href='mailto:opalexander5@gmail.com'>
                  <span className='text-blue-400'>opalexander5@gmail.com</span>
                </Link>
              </p>
            </div>

            <div className='flex items-center mt-6 -mx-2'>
              <KofiButton color='#0a9396' title='Donate' kofiID='Y8Y43H529' />
            </div>
          </div>

          <div className='mt-8 lg:mt-0 lg:w-1/2'>
            <div className='flex items-center justify-center lg:justify-end'>
              <div className='max-w-lg relative aspect-[3/4] h-96'>
                <Image
                  className='object-cover object-center w-full h-64 rounded-md shadow'
                  src={require('../../public/leif.jpg')}
                  alt=''
                  layout='fill'
                  objectFit='responsive'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
