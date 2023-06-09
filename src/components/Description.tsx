import Image from 'next/image'

export default function Description({ children }: { children: string }) {
  return (
    <li className='flex gap-3 h-8 md:text-xs'>
      <Image
        src={'/icon-list.svg'}
        width={20}
        height={20}
        alt='manolo'
        className='relative -top-[0.3rem] left-0'
      />
      <span className='block'>{children}</span>
    </li>
  )
}
