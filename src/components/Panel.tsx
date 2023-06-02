import Hero from './Hero'
import Information from './Information'

export default function Panel() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Hero />
      <Information />
    </div>
  )
}
