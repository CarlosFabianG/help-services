import React, { useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Input,
  Button,
  Text,
  SimpleGrid
} from '@chakra-ui/core'
import { MyContext } from '../../context'
function Home({ history }) {
  const context = useContext(MyContext)
  const { feed } = context.state
  return (
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="#ffdbe3"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
      <Heading as="h1" size="2xl" color="#1e1e1e">
        Proyecto final
        <Box as="span" color="#ff3465">
          H
        </Box>
      </Heading>
      
    </Stack>
  )
}
export default Home