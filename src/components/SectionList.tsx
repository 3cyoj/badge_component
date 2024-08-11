import { Section } from './Section'

const SectionList = () => {
  return (
    <div className='grid h-screen place-content-center text-center text-5xl font-semibold'>
      <Section color={'slate'} />
      <Section color={'red'} />
      <Section color={'yellow'} />
      <Section color={'green'} />
      <Section color={'indigo'} />
    </div>
  )
}

export { SectionList }
