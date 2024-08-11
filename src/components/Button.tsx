import { Colors, FontSizes } from './constant'

type ButtonProps = {
  color: Colors
  fontSize: FontSizes
}

const Button = ({ color, fontSize }: ButtonProps) => {
  const colorVariants = {
    indigo: 'border-indigo-200 bg-indigo-5',
    red: 'border-red-200 bg-red-5',
    slate: 'border-slate-200 bg-slate-5',
    green: 'border-green-200 bg-green-5',
    yellow: 'border-yellow-200 bg-yellow-5',
  }
  const fontSizeVariants = {
    xs: 'px-1 text-xs',
    sm: 'px-2 text-sm',
    base: 'px-3 text-base',
  }

  return (
    <button
      className={`mx-2.5 rounded-3xl border-2 border-solid ${colorVariants[color]} ${fontSizeVariants[fontSize]} font-normal`}
    >
      Label
    </button>
  )
}

export { Button }
