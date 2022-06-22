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
              <div className='flex items-center mt-6 -mx-2'>
                <Link href='https://twitter.com/LMaplesson' ariaLabel='Twitter'>
                  <svg
                    className='w-7 h-7 mx-2 text-gray-500 fill-current cursor-pointer hover:text-gray-600 '
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path d='M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z' />
                  </svg>
                </Link>

                <Link href='https://www.reddit.com/user/Leif_Maplesson' ariaLabel='Reddit'>
                  <svg
                    className='w-7 h-7 mx-2 text-gray-500 fill-current cursor-pointer hover:text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z' />
                  </svg>
                </Link>
              </div>
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
