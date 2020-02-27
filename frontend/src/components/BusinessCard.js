import React, { Component } from 'react'
import { Box, Image, Badge, StarIcon } from "@chakra-ui/core";



function BusinessCard () {

  const property = {
  imageUrl: 'https://elmejorplomero.com/imagenes/fontaneros.jpg',
  name: 'Arturo Araujo',
  address: 'Xochimilco 102',
  city: 'Ciudad de México',
  state: 'CMDX',
  zipCode: '10101',
  category: 'Plomero',
  rating: 4.5,
  reviewCount: 90
}
    return(
      
      <Box backgroundColor='whity.500' color="whity.500" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={property.imageUrl} />

      <Box p="6" color="whity.500">
        <Box d="flex" alignItems="baseline" color="whity.500">
          <Badge rounded="full" px="2" variantColor="teal">
            New
          </Badge>
          <Box
            color="whity.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
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
          {property.name}
        

        <Box color="gray.500">
          {property.address}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm" color="whity.500">
            / wk
          </Box>
        </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      
    </Box>
    
    )
}


export default BusinessCard