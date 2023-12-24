import { Button } from '@chakra-ui/react'
import { Provider, createStore, atom, useAtom } from 'jotai'

const countAtom = atom(0)

const myStore = createStore()
myStore.set(countAtom, 10)

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}

const USeCreateStore = () => (
  <div>
    <h2>useCreateStore</h2>
    {/*
      storeに対してcreateStoreで作成した値を渡すとSetterで更新した値が初期値に反映される
      storeを渡さない場合はAtomの初期値が反映される
      ファイル内に定義したAtomを参照するので別ファイルで定義したAtomは参照できない
    */}
    <Provider store={myStore}>
      <Counter />
    </Provider>
    <Provider>
      <Counter />
    </Provider>
    <Counter />
  </div>
)

export default USeCreateStore
