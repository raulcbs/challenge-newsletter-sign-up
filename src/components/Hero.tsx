'use client'

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 }) // Define el ancho maximo para considerar como version movil

  return (
    <>
      {isMobile ? (
        <div className='w-full relative'>
          <Image
            src='/illustration-sign-up-mobile.svg'
            width={500}
            height={500}
            alt='Sign-up-mobile'
          />
        </div>
      ) : (
        <div className='p-4'>
          <Image
            src='/illustration-sign-up-desktop.svg'
            width={600}
            height={600}
            alt='Sign-up-desktop'
          />
        </div>
      )}
    </>
  )
}
