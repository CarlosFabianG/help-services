import React, { useContext } from 'react'
import { MyContext } from '../context'
import { Stack, Input, Button, Flex, Select } from "@chakra-ui/core";


function SearchBar(){
//Se estan usando hooks si no funciona cambiare el component a clase
//y usaré componentDidMount method    
    const context = useContext(MyContext)
    
    
        return(
            <Stack pt="20vh" pl="5px">
          <Flex spacing={0} pl="3vw">
          <Select onChange={context.handleSearchBarInputs} value={context.state.searchbar.term} name='term' size="lg" w="550px" isFullWidth='false' placeholder="Search services">
  <option value="plomeros">Plomería</option>
  <option value="mudanzas">Mudanzas</option>
  <option value="mecanicos">Mecánicos</option>
  <option value="electricos">Electricos</option>
</Select>
  <Input  onChange={context.handleSearchBarInputs} value={context.state.searchbar.location} name='location' placeholder="Where" size="lg" w="550px" isFullWidth='false'/>
  </Flex>
  <Flex justify="center">
  <Button icon="search" bg="navyblue.500" color="whity.100" justify="center" mt='5vh'  w="300px" onClick={() => context.handleSearchEvent()}>
      Search</Button>
      </Flex>
        </Stack>
        )
    
}

export default SearchBar