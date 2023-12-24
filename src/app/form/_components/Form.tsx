import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'

const nameAtom = atom('')
const emailAtom = atom('')
const telAtom = atom('')
// const sexAtom = atom<'men' | 'women' | ''>('')
// const passwordAtom = atom('')
// const passwordConfirmationAtom = atom('')

const Name = () => {
  const [name, setName] = useAtom(nameAtom)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <FormControl isRequired>
      <FormLabel>Name</FormLabel>
      <Input
        type='name'
        value={name}
        onChange={handleInputChange}
        placeholder='name'
      />
    </FormControl>
  )
}

const Email = () => {
  const [email, setEmail] = useAtom(emailAtom)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        type='email'
        value={email}
        onChange={handleInputChange}
        placeholder='example@example.com'
      />
    </FormControl>
  )
}

const Tel = () => {
  const [tel, setTel] = useAtom(telAtom)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  return (
    <FormControl isRequired>
      <FormLabel>Tel</FormLabel>
      <Input
        type='tel'
        value={tel}
        onChange={handleInputChange}
        placeholder='000-0000-0000'
      />
    </FormControl>
  )
}

const From = () => {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <Name />
        <Email />
        <Tel />
      </form>
    </div>
  )
}

export default From
