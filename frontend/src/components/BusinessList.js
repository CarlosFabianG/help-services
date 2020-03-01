import React, { useContext } from 'react'
import { MyContext } from '../context'
import BusinessCard from './BusinessCard'
import {
  SimpleGrid
} from '@chakra-ui/core'



function BusinessList(){
  const context = useContext(MyContext)
  
return(
    <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={3} spacing={10}>
      <>
      {console.log('bus', context)
      }
      {context.state.business && context.state.business.businesses ? (
        context.state.business.businesses.map(business => <BusinessCard key={business.id} address1={business.location.address1} image={business.image_url} business={business}/>)

      ):(null)}
      </>
</SimpleGrid>
)
}

export default BusinessList