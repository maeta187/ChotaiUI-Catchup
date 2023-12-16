import { useMemo } from 'react'
import { Button } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
/**
 * atomの状態を確認するためのツール
 * ProviderをLayoutで使用する方法もあるが、環境汚染を避けるためにここで使用する
 */
import { DevTools } from 'jotai-devtools'

/**
 * use clientを宣言しているコンポーネントで、atomを宣言するとエラーになる
 * このままコンポーネント内でで宣言すると無限ループになる
 * コンポーネント内で使用する場合はuseMemoを使用する
 */
const priceAtom = atom(10)
/**
 * atomのデバッグラベルを設定することができる
 * デバッグラベルを設定すると、DevToolsでatomの状態を確認することができる
 */
// priceAtom.debugLabel = 'priceAtom'

/**
 * コンポーネントがマウントされた時に実行される
 * 初期処理や副作用を実行する場合はここで実行する
 * returnで関数を返すと、コンポーネントがアンマウントされた時に実行される
 * 主にクリーンアップ処理を実行する
 */
// priceAtom.onMount = (setPrice) => {
//   console.log('onMount')
//   return () => {
//     console.log('onUnmount')
//   }
// }

/**
 * 読み取り専用のatomを作成する場合は、atomの第一引数にgetter関数を渡す
 */
const readOnlyAtom = atom((get) => get(priceAtom) * 2)

const ReadOnlyAtom = () => {
  const [price] = useAtom(readOnlyAtom)

  return <p>ReadOnlyAtom{price}</p>
}

/**
 * 書き込み専用のatom、第2引数にsetter関数を渡す
 * 第3引数には、dispatch関数から渡された値を受け取る
 * 基本的に第3引数はunknown型なので、型を指定する必要がある
 */
const writeOnlyAtom = atom(null, (get, set, update: number) => {
  set(priceAtom, get(priceAtom) - update)
  /**
   * getterを使用せず、関数を渡すことも可能
   * この場合は、atomの値を直接更新することができる
   */
  // set(priceAtom, (price) => price - update.discount)
})

const WriteOnlyAtom = () => {
  const [, setPrice] = useAtom(writeOnlyAtom)

  return (
    <div>
      <p>WriteOnlyAtom</p>
      <Button onClick={() => setPrice(1)}>-</Button>
    </div>
  )
}

/**
 * 読み書き両方可能なatom
 * 読み取り専用と書き込み専用のatomを組み合わせて作成する
 * サンプルだとsetter関数処理はシンプルなのでuseAtomからdispatch関数を使用する方法が良い
 * 複雑な処理などを行なってから処理した時にはこちらが適している？
 */
const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (_, set, newPrice: number) => {
    set(priceAtom, newPrice / 2)
  }
)

const ReadWriteAtom = () => {
  const [price, setPrice] = useAtom(readWriteAtom)

  return (
    <div>
      <p>ReadWriteAtom:{price}</p>
      <Button onClick={() => setPrice(10)}>+</Button>
    </div>
  )
}

const Atoms = () => {
  /**
   * コンポーネント内ではatomを参照する場合はuseAtomを使用する
   * 基本的な使い方はuseStateと同じ
   */
  const [price, setPrice] = useAtom(priceAtom)
  /**
   * コンポーネント内ではatomを使用するパターン
   * 第2引数にatomを渡して値の変更を監視する(useEffectの第2引数と同じ)
   */
  const valueAtom = useMemo(() => atom(price), [price])
  const [value] = useAtom(valueAtom)

  const increment = () => setPrice((c) => c + 1)
  const decrement = () => setPrice((c) => c - 1)

  return (
    <div>
      <DevTools />
      <p>price:{price}</p>
      <p>valueAtom:{value}</p>
      <Button onClick={decrement} mr='6'>
        -
      </Button>
      <Button onClick={increment}>+</Button>
      <ReadOnlyAtom />
      <WriteOnlyAtom />
      <ReadWriteAtom />
    </div>
  )
}

export default Atoms
