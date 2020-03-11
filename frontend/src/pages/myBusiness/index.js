import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
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
          w="150vw"
          minH="90vh"
        >
<Flex>
<Heading justify="center" mb={1} size="sm"></Heading>
</Flex>
        

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
              boxShadow="lg"
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
                   
                  </Box>

                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                     {business.name}
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