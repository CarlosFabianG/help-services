import React, { Component } from 'react'
import BusinessCard from './BusinessCard'
import {
  SimpleGrid
} from '@chakra-ui/core'



function BusinessList(){
return(
    <SimpleGrid minChildWidth="250px" spacing={8}>
  < BusinessCard  />
  < BusinessCard  />
  < BusinessCard  />
  < BusinessCard  />
</SimpleGrid>
)
}

export default BusinessList