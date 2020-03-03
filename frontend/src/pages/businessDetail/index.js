import React, { Component } from 'react'
import { MyContext } from '../../context'
import axios from 'axios'
import { Box, Image, Badge, Icon, Flex } from "@chakra-ui/core"




class BusinessDetail extends Component{

        state = {
            businessdetail:[]
        }
        
        //async componentDidMount() {
            //const { id } = this.props.match.params
            //const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}/${id}`,{headers:{Authorization:`Bearer ${api_key}`}})
            //this.setState({business:{...data}})
            //console.log(data)
        //}
    

}


export default BusinessDetail