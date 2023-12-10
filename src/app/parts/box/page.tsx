import { Box } from '@chakra-ui/react'
import BoxSample from '@/app/parts/box/_components/CardBox'

export default function Page() {
  return (
    <main>
      <Box bg='tomato' w='100%' p={4} color='white'>
        This is the Box
      </Box>
      <BoxSample />
    </main>
  )
}
