import Description from './Description'

const INITIAL_DESCRIPTION = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
]

export default function ListOfDescription() {
  return (
    <ul className='flex flex-col gap-2'>
      {INITIAL_DESCRIPTION.map((description, index) => (
        <Description>{description}</Description>
      ))}
    </ul>
  )
}
