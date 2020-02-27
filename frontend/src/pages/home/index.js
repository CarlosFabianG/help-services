import React, { useContext } from 'react'
import { MyContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import BusinessList from '../../components/BusinessList'
import {
  Stack,
  Heading,
  Box
  //Input
  //Button,
  //Text,
  //SimpleGrid
} from '@chakra-ui/core'
//import { MyContext } from '../../context'
function Home({ history }) {
  const context = useContext(MyContext)
  const { businesses } = context.state
  return (
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="#20948B"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Heading as="h1" size="2xl" color="#1e1e1e">
        Help Services
        <Box as="span" color="#ff3465">
          H
        </Box>
      </Heading>
      < SearchBar />
      < BusinessList businesses={businesses}/>
    </Stack>
  )
}
export default Home