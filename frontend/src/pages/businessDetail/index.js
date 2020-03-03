import React, { Component } from 'react'
import { MyContext } from '../../context'
import axios from 'axios'
import BusinessCard from '../../components/BusinessCard'
import { Box, Image, Badge, Icon, Flex } from "@chakra-ui/core"
const api_key = 'DrcSCtjf4UWodf1lxDoID7v21R3ElIbbXhIpBG2iCxXjgIpi-ujG4J7gwrNjeQNYwizW0VRhlSD9YgHb1uacJd7m1JHE2uZpc6nR-l6IeJqMBKPvRs3g69XgVfPOXXYx'



class BusinessDetail extends Component{

        state = {
            businessdetail:[]
        }
        
        async componentDidMount() {
            const { id } = this.props.match.params
            const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,{headers:{Authorization:`Bearer ${api_key}`}})
            this.setState({businessdetail:{...data}})
            //console.log(data)
        }
    
        render(){
            return(
                <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                <Image src={this.state.businessdetail.image_url}  />
          
                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                      New
                    </Badge>
                    
                  </Box>
          
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {this.state.businessdetail.name}
                  </Box>
                  <Box color="gray.500">
          {this.state.businessdetail.address1}
          </Box>
                </Box>
              </Box>
            )
            }

}


export default BusinessDetail