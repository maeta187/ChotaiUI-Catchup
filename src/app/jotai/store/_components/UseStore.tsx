import { Button } from '@chakra-ui/react'
import { createStore, atom } from 'jotai'
import { DevTools } from 'jotai-devtools'

/**
 * createStoreでstoreを作成
 * storeからgetter, setter, subscriberが提供されている
 * getter、setterはatomとほぼ同じ
 * subscriberは第1引数のatomが更新されると第2引数の関数が実行される
 */
const myStore = createStore()

const countAtom = atom(0)
myStore.set(countAtom, 1)
myStore.sub(countAtom, () =>
  console.log(`countAtom changed: ${myStore.get(countAtom)}`)
)

const UseStore = () => {
  const count = myStore.get(countAtom)

  /**
   * storeのsetterで値を更新してもコンポーネントの再レンダリングは行われない
   * subscriberなどでは更新した値が反映される
   * どの様に使うかは学習が必要
   */
  const increment = () => myStore.set(countAtom, (c) => c + 1)
  return (
    <div>
      <h2>useStore</h2>
      <p>count: {count}</p>
      <Button onClick={increment}>+</Button>
      <DevTools />
    </div>
  )
}

export default UseStore
