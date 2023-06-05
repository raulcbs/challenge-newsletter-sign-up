import Hero from './Hero'
import Information from './Information'

export default function Panel() {
  return (
    <div
      className='bg-white md:rounded-2xl w-full flex flex-col md:flex-row-reverse 
    md:max-w-screen-md md:mx-auto'
    >
      <Hero />
      <Information />
    </div>
  )
}
