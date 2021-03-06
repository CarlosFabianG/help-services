import React, { useContext } from 'react'
import { MyContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import BusinessList from '../../components/BusinessList'
import {
  Stack,
  Heading
} from '@chakra-ui/core'

function Home({ history }) {
  const context = useContext(MyContext)
  const { businesses } = context.state
  return (
   
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="whity"
      textAlign="center"
      w="100vw"
      spacing={8} 
    >
      <Heading as="h1" size="2xl" color="navyblue.900">
        Help Services
      </Heading>
      < SearchBar />  
      < BusinessList businesses={businesses}/>
    </Stack>
  )
}
export default Home