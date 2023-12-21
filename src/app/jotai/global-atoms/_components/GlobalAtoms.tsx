import { Button } from '@chakra-ui/react'
import { useAtom, useAtomValue } from 'jotai'
import { DevTools } from 'jotai-devtools'
import { countAtom, nameAtom } from '@/atoms/atoms'

const GlobalAtoms = () => {
  const [count, setCount] = useAtom(countAtom)
  const name = useAtomValue(nameAtom)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
      </div>
      <div>
        <p>Name: {name}</p>
      </div>
      <DevTools />
    </div>
  )
}

export default GlobalAtoms
