'use client'

import UseAtoms from '@/app/jotai/store/_components/UseAtoms'
import UseStore from '@/app/jotai/store/_components/UseStore'

const UseAtomsClient = () => {
  return (
    <div>
      <UseAtoms />
      <UseStore />
    </div>
  )
}

export default UseAtomsClient
