import React, { Component } from 'react'
import { Input } from "@chakra-ui/core";


class SearchBar extends Component{
    state = {
        term: '',
        location: '',
        sortBy: 'best_match'
    }

    render() {
        return(
          <>
  <Input placeholder="Search services" size="lg" isFullWidth='false'/>
  <Input placeholder="Where" size="lg" isFullWidth='false'/>
         </>
        )
    }
}

export default SearchBar