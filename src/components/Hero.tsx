import Image from 'next/image'

export default function Hero() {
  return (
    <div className='md:hidden'>
      <Image
        src={'/illustration-sign-up-mobile.svg'}
        width={500}
        height={500}
        alt='Sign-up-mobile'
      />
    </div>
  )
}
