import React, { useContext } from 'react'
import { MyContext } from '../context'
import { Box, Image, Badge, StarIcon, Link} from "@chakra-ui/core";




function BusinessCard ({ business }) {
  const context = useContext(MyContext)
  //const { business } = context.state

    return(
      
      <Box  p="15px" boxShadow="lg" backgroundColor='whity.500' color="whity.500" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={business.image_url} 
      size="330px"
      objectFit="cover"
      rounded="md"
      m='2px'
      />

      <Box p="6" color="whity.500">
        <Box d="flex" alignItems="baseline" color="whity.500">
          <Badge rounded="full" px="2" variantColor="teal">
            Rating {business.rating}
          </Badge>
          <Badge rounded="full" px="2" variantColor="orange">
            {business.review_count} reviews
            </Badge>
         
          <Box
            color="whity.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="3"
          >
          </Box>
        </Box>

        <Box
         color="gray.500"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {business.name}
        

        <Box color="gray.500">
          {business.location.address1}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm" color="whity.500">
            / wk
          </Box>
        </Box>
        {!business.is_closed?(
          <Badge rounded="full" px="2" variantColor="green">
          Open Now</Badge>): (
          <Badge rounded="full" px="2" variantColor="red">
          Closed Now</Badge>)}
          
        </Box>
    </Box>
    
    )
}


export default BusinessCard