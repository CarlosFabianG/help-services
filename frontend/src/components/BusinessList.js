import React, { useContext } from 'react'
import { MyContext } from '../context'
import BusinessCard from './BusinessCard'
import {
  SimpleGrid
} from '@chakra-ui/core'



function BusinessList(){
  const context = useContext(MyContext)
  const { businesses } = context.state
return(
    <SimpleGrid minChildWidth="250px" spacing={8}>
 {businesses.map(business => <BusinessCard key={business.id} business={business}/>)}
</SimpleGrid>
)
}

export default BusinessList