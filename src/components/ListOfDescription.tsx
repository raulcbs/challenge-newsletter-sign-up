import Description from './Description'

const INITIAL_DESCRIPTION = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
]

export default function ListOfDescription() {
  return (
    <ul className='flex flex-col gap-2 md:gap-0'>
      {INITIAL_DESCRIPTION.map((description, index) => (
        <Description key={index + description}>{description}</Description>
      ))}
    </ul>
  )
}
