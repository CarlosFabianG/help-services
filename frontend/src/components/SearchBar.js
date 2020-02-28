import React, { useContext } from 'react'
import { MyContext } from '../context'
import { Input, Link, Button } from "@chakra-ui/core";


function SearchBar(){
//Se estan usando hooks si no funciona cambiare el component a clase
//y usaré componentDidMount method    
    const context = useContext(MyContext)
    
    
        return(
          <>
  <Input onChange={context.handleSearchBarInputs} value={context.state.searchbar.term} name='term' placeholder="Search services" size="lg" isFullWidth='false'/>
  <Input onChange={context.handleSearchBarInputs} value={context.state.searchbar.location} name='location' placeholder="Where" size="lg" isFullWidth='false'/>
  <Button onClick={() => context.handleSearchEvent()}>
      Search</Button>
         </>
        )
    
}

export default SearchBar