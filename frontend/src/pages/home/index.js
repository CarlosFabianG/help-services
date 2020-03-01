import React, { useContext } from 'react'
import { MyContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import BusinessList from '../../components/BusinessList'
import Footer from '../../components/Footer'
import {
  Stack,
  Heading,
  Image,
  Box
} from '@chakra-ui/core'


//import { MyContext } from '../../context'
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
      <Heading as="h1" size="2xl" color="#1e1e1e">
        Help Services
        <Box as="span" color="#ff3465">
          H
        </Box>
        <Image src="../public/help_services_logo.png" />
      </Heading>
      < SearchBar />
      < BusinessList businesses={businesses}/>
    </Stack>
  )
}
export default Home