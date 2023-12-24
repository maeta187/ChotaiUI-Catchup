import { Button } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'

const counterAtom = atom(0)

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom)

  return (
    <div>
      <p>count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}

export default Counter
