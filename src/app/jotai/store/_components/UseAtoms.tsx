import { Button } from '@chakra-ui/react'
import { atom, useSetAtom, useAtomValue } from 'jotai'

const countAtom = atom(0)

const Counter = () => {
  /**
   * useSetAtomは値を更新する時だけ使用に適している
   * const [, setValue] = useAtom(valueAtom)はアップデートの度に不要な再レンダリングを引き起こす
   * なのでパフォーマンスが懸念される場合がある
   */
  const setCount = useSetAtom(countAtom)
  /**
   * useAtomValueは値を読み取ると時だけ使用に適している
   * getter関数を使用する方法もあるがシンプルな参照はこちらが適している？
   */
  const count = useAtomValue(countAtom)

  return (
    <div>
      <p>count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}

const UseAtoms = () => {
  return (
    <div>
      <h2>useAtom</h2>
      <Counter />
    </div>
  )
}

export default UseAtoms
