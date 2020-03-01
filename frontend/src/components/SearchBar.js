import React, { useContext } from 'react'
import { MyContext } from '../context'
import { Stack, Input, Link, IconButton, Flex } from "@chakra-ui/core";


function SearchBar(){
//Se estan usando hooks si no funciona cambiare el component a clase
//y usaré componentDidMount method    
    const context = useContext(MyContext)
    
    
        return(
            <Stack pt="20vh" pl="5px">
          <Flex spacing={0} pl="3vw">
  <Input onChange={context.handleSearchBarInputs} value={context.state.searchbar.term} name='term' placeholder="Search services" size="lg" w="550px" isFullWidth='false'/>
  <Input  onChange={context.handleSearchBarInputs} value={context.state.searchbar.location} name='location' placeholder="Where" size="lg" w="550px" isFullWidth='false'/>
  </Flex>
  <Flex justify="center">
  <IconButton icon="search" justify="center" mt='5vh'  w="300px" onClick={() => context.handleSearchEvent()}>
      Search</IconButton>
      </Flex>
        </Stack>
        )
    
}

export default SearchBar