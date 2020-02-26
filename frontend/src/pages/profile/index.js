import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import CardProfile from '../../components/CardProfile'
import { Flex } from '@chakra-ui/core'
export default function Profile({ history }) {
  const context = useContext(MyContext)
  // aqui dice component did mount, si no lo ven, les hace falta chelas
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <Flex
              w="100vw"
              minH="90vh"
              wrap="wrap"
              direction="column"
              align="center"
              justify="center"
            >
              <CardProfile user={loggedUser} history={history} />
            </Flex>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}