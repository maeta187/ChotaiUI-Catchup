import { useEffect } from 'react'
import { Input } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'

interface Props {
  onSetNameAtom: (value: string) => void
}

const nameAtom = atom('Quill')

const InputName = ({ onSetNameAtom }: Props) => {
  const [name, setName] = useAtom(nameAtom)

  /**
   * 親コンポーネントに値を渡し、親のstoreを更新する
   * これは正しい使い方なのかは不明
   */
  useEffect(() => {
    onSetNameAtom(name)
  }, [name, onSetNameAtom])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Input value={name} onChange={handleChange} />
    </div>
  )
}
export default InputName
