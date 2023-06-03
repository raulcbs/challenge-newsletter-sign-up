import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <div className='md:hidden'>
        <Image
          src={'/illustration-sign-up-mobile.svg'}
          width={500}
          height={500}
          alt='Sign-up-mobile'
        />
      </div>
      <div className='sm:hidden md:block md:p-4'>
        <Image
          src={'/illustration-sign-up-desktop.svg'}
          width={600}
          height={600}
          alt='Sign-up-desktop'
        />
      </div>
    </>
  )
}
