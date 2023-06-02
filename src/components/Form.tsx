'use client'

import { useEffect, useState } from 'react'

export default function Form() {
  const [inputEmail, setInputEmail] = useState('')
  const [isCorrect, setIsCorret] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value
    setInputEmail(data)
    setIsCorret(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail))
    if (data === '') setIsCorret(true)
  }

  return (
    <form className='flex flex-col gap-7'>
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
          name='email'
          value={inputEmail}
          type='email'
          placeholder='email@company.com'
          className={`w-full h-14 border-grey border rounded-lg p-5 focus:border-0 focus:outline-none focus:ring-1 ${
            isCorrect ? '' : 'focus:ring-red-500/80 focus:bg-red-500/20'
          }`}
          onChange={handleChange}
        />
      </div>
      <button
        className={`font-bold w-full h-14 border-none rounded-lg bg-dark_slate_grey hover:bg-charcoal_grey active:bg-gradient-to-r from-secundary from-10% to-primary to-100% text-white`}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}
