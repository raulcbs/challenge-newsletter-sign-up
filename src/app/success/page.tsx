import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <div className='flex flex-col mt-32 w-full h-full md:bg-white md:w-[450px] md:h-[450px] md:mx-auto md:rounded-3xl'>
      <div className='flex flex-col px-5 w-full gap-6 md:p-12'>
        <Image
          src={'/icon-success.svg'}
          width={50}
          height={50}
          alt='success'
        />
        <h1 className='text-4xl font-bold w-1/2 text-dark_slate_grey'>Thanks for subscribing!</h1>
        <p className='text-charcoal_grey'>
          A confirmation email has been sent to{' '}
          <span className='font-bold'>ash@loremcompany.com</span>. Please open it and click the
          button inside to confirm your subscription
        </p>
      </div>
      <button
        className={`font-bold mx-5 mt-40 md:mt-0 h-14 md:w-4/5 md:self-center border-none rounded-lg bg-dark_slate_grey hover:bg-charcoal_grey active:bg-gradient-to-r from-secundary from-10% to-primary to-100% text-white active:transition-colors active:duration-200`}
      >
        <Link
          href={'/'}
          className='md:min-w-full'
        >
          Dismiss message
        </Link>
      </button>
    </div>
  )
}
