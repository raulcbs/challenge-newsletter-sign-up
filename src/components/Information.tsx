import Form from './Form'
import ListOfDescription from './ListOfDescription'

export default function Information() {
  return (
    <main className='w-full flex flex-col gap-4 px-8 text-charcoal_grey md:self-center md:p-4 md:m-8 md:w-4/5 '>
      <section className='flex flex-col gap-4'>
        <h2 className='text-5xl font-bold text-dark_slate_grey'>Stay updated!</h2>
        <h6>Join 60,000+ product managers reciving monthly updates on:</h6>
      </section>

      <ListOfDescription />

      <Form />
    </main>
  )
}
