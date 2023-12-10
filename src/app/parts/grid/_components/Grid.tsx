'use client'

import { Grid, GridItem } from '@chakra-ui/react'

const GridSample = () => {
  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
      <Grid
        h='200px'
        marginTop='20px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
      <Grid marginTop='20px' templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={2} h='10' bg='tomato' />
        <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
      </Grid>
      <Grid
        marginTop='20px'
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </div>
  )
}

export default GridSample
