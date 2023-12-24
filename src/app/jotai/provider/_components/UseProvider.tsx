// import { Button } from '@chakra-ui/react'
import { Provider, createStore, atom } from 'jotai'
import { DevTools } from 'jotai-devtools'
import Counter from '@/app/jotai/provider/_components/Counter'
import InputName from '@/app/jotai/provider/_components/InputName'
import USeCreateStore from '@/app/jotai/provider/_components/USeCreateStore'

const myStore = createStore()
const nameAtom = atom('')
myStore.set(nameAtom, '')

const UseProvider = () => {
  const setNameAtom = (value: string) => {
    myStore.set(nameAtom, value)
    console.log(myStore.get(nameAtom))
  }

  return (
    <div>
      <h2>useProvider</h2>
      <Counter />
      <Counter />
      {/* Providerで囲まれたコンポーネントは同じコンポーネントを使用していても値の共有がされない */}
      <Provider>
        <p>Provider-Counter</p>
        <Counter />
      </Provider>
      <Provider>
        <InputName onSetNameAtom={setNameAtom} />
      </Provider>
      <USeCreateStore />
      <DevTools />
    </div>
  )
}

export default UseProvider
