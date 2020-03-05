import React, { Component } from 'react'
//import { MyContext } from '../../context'
import axios from 'axios'
//import BusinessCard from '../../components/BusinessCard'
import { Box, Image, Badge, Stack, Flex } from "@chakra-ui/core"
const api_key = 'DrcSCtjf4UWodf1lxDoID7v21R3ElIbbXhIpBG2iCxXjgIpi-ujG4J7gwrNjeQNYwizW0VRhlSD9YgHb1uacJd7m1JHE2uZpc6nR-l6IeJqMBKPvRs3g69XgVfPOXXYx'



class BusinessDetail extends Component{

        state = {
            businessdetail:[],
            reviews:[]
        }
        
        async componentDidMount() {
            const { id } = this.props.match.params
            const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,{headers:{Authorization:`Bearer ${api_key}`}})
            this.setState({businessdetail:{...data}})
            const {dataReviews} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews`,{headers:{Authorization:`Bearer ${api_key}`}})
            this.setState({reviews:{...dataReviews}})
            console.log(data)
            console.log(dataReviews)
            console.log(this.state.businessdetail.location.display_address)
        }
    
        render(){
            return(
                <Flex>
                  <Flex>
                <Box mt="15vh" p="15px" boxShadow="lg" backgroundColor='whity.500' color="whity.500" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={this.state.businessdetail.image_url}  
      size="330px"
      objectFit="cover"
      rounded="md"
      m='2px'
      />

      <Box p="6" color="whity.500">
        <Box d="flex" alignItems="baseline" color="whity.500">
          <Badge rounded="full" px="2" variantColor="teal">
              Rating {this.state.businessdetail.rating} 
          </Badge>
          <Badge rounded="full" px="2" variantColor="green">
            {this.state.businessdetail.review_count} reviews
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
          {this.state.businessdetail.name}
         
        

        <Box color="gray.500">
        {this.state.businessdetail.display_phone}
          </Box>
          <Box color="gray.500">
        {this.state.businessdetail.city}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            
          </Box>
        </Box>
          
        {!this.state.businessdetail.is_closed?(
          <Badge rounded="full" px="2" variantColor="orange">
          Open Now</Badge>): (
          <Badge rounded="full" px="2" variantColor="red">
          Closed Now</Badge>)}
        </Box>
    </Box>
    <Stack spacing={8}>
  </Stack>
  </Flex>
  <Flex mt="8vh">
    <Image 
      src="../google_map.jpg"
      size="700px"
      objectFit="cover"
      rounded="md"
      pt="50px"
      mt="10vh"
      m='2px'/>
  </Flex>
  </Flex>
            )
            }

}


export default BusinessDetail


