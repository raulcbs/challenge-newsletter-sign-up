'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function Form() {
  const [inputEmail, setInputEmail] = useState('')
  const [isCorrect, setIsCorret] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value
    setInputEmail(data)
    setIsCorret(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail))
    if (data === '') setIsCorret(true)
  }

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value === '') {
      inputRef.current.focus()
    }

    if (inputEmail !== '' && isCorrect) {
      router.push('/success')
    }
  }

  return (
    <form
      className='flex flex-col gap-4 w-full justify-center mx-auto'
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <label
            htmlFor='input'
            className='font-bold text-sm text-charcoal_grey'
          >
            Email address
          </label>
          {!isCorrect ? (
            <label
              htmlFor='input'
              className='font-bold text-sm text-red-500/80'
            >
              Valid email required
            </label>
          ) : (
            <></>
          )}
        </div>
        <input
          id='input'
          ref={inputRef}
          name='email'
          value={inputEmail}
          type='email'
          placeholder='email@company.com'
          className={`w-full h-14 border-grey border rounded-lg p-5 focus:border-0 focus:outline-none focus:ring-1 focus:ring-primary ${
            isCorrect ? '' : 'focus:ring-red-500/80 focus:bg-red-500/20'
          }`}
          onChange={handleChange}
        />
      </div>
      <button
        className={`font-bold w-full h-14 border-none rounded-lg bg-dark_slate_grey hover:bg-charcoal_grey active:bg-gradient-to-r from-secundary from-10% to-primary to-100% text-white active:transition-colors active:duration-200`}
        onClick={handleClick}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}
