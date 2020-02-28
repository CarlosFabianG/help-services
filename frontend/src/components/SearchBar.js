import React, { useContext } from 'react'
import { MyContext } from '../context'
import { Input, Link, Button } from "@chakra-ui/core";


function SearchBar(){
//Se estan usando hooks si no funciona cambiare el component a clase
//y usaré componentDidMount method    
    const context = useContext(MyContext)
    
    
        return(
          <>
  <Input placeholder="Search services" size="lg" isFullWidth='false'/>
  <Input placeholder="Where" size="lg" isFullWidth='false'/>
  <Button onClick={() => context.handleSearchEvent()} type='submit' >
      Search</Button>
         </>
        )
    
}

export default SearchBar