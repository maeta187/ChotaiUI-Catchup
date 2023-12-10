'use client'

import { Container, VStack, Box } from '@chakra-ui/react'

const ContainerSample = () => {
  return (
    <div>
      <Container>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>
      <VStack>
        <Container maxW='md' bg='blue.600' color='white'>
          &quot;md&quot; Container
        </Container>
        <Container maxW='550px' bg='purple.600' color='white'>
          &quot;550px&quot; Container
        </Container>
        <Container maxW='container.sm' bg='green.400' color='#262626'>
          &quot;container.sm&quot; Container
        </Container>
      </VStack>
      <Container maxW='2xl' bg='blue.600' centerContent>
        <Box padding='4' bg='blue.400' color='black' maxW='md'>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </div>
  )
}

export default ContainerSample
