import React, { useEffect, useContext } from 'react'
import AUTH_SERVICE from '../../services/auth'
import { MyContext } from '../../context'
//import { render } from 'react-dom'
//import BusinessCard from '../../components/BusinessCard'
import {
  Stack,
  Heading,
  Box,
  Flex,
  Image,
  Badge,
  SimpleGrid
  } from '@chakra-ui/core'
  




function MyBusiness ({history}) {
  const context = useContext(MyContext)
 
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
    context.getMyBusinesses()
  })

  

   return (
    <MyContext.Consumer>
    {context => {
      return (
      <React.Fragment>

        <Stack
          mt="15vh"
          ml="5vw"
          mr="5vw"
          backgroundColor="white"
          textAlign="center"
          w="90vw"
          minH="90vh"
        >

        <Heading mb={1} size="sm">Mis registros</Heading>

        <Flex>

          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            ml="5vw"
            mr="5vw"
          >
            {context.state.myBusinesses.map(business => (
              
              <>
            <Box 
              key={business._id} 
              maxW="sm" 
              borderWidth="1px" 
              rounded="lg" 
              overflow="hidden" 
              mt="5vh"
              mr="5vw" 
              mb="5vh"
              ml="5vw"
            >

              <Image src={business.imageURL} alt={business.name} />

              <Box p="6" >

                <Box d="flex" alignItems="baseline">

                  <Badge rounded="full" px="2" variantColor="teal">
                    New
                  </Badge>

                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    Hola
                  </Box>

                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Hola
                  </Box>

                <Box
                    mt="1"
                    as="h5"
                    lineHeight="tight"
                    isTruncated
                  >
                    {business.address}
                </Box>

                <Box>
                  {business.phone}
                  <Box as="span" color="gray.600" fontSize="sm">
                     {business.phone}
                  </Box>
                </Box>
              </Box>
            </Box>
            </>
            ))}
          </SimpleGrid>
        </Flex>
      </Stack>
    </React.Fragment>
    )
  }}
  </MyContext.Consumer>
)
   

}

export default MyBusiness