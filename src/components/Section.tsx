import { Button } from './Button'
import { Colors } from './constant'

function getTextColor(color: Colors) {
  switch (color) {
    case 'green':
      return 'text-green-600'
    case 'indigo':
      return 'text-indigo-600'
    case 'red':
      return 'text-red-600'
    case 'slate':
      return 'text-slate-600'
    case 'yellow':
      return 'text-yellow-600'
  }
}

type SectionProps = {
  color: Colors
}

const Section = ({ color }: SectionProps) => {
  return (
    <section className={`${getTextColor(color)} py-0.5`}>
      <Button color={color} fontSize={'xs'} />
      <Button color={color} fontSize={'sm'} />
      <Button color={color} fontSize={'base'} />
    </section>
  )
}

export { Section }
