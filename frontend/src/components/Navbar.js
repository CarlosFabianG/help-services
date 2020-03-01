import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
  Image
} from '@chakra-ui/core'
import { MyContext } from '../context'

function Navbar({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="white"
            w="100vw"
            h="10vh"
            p={8}
            align="center"
            justify="space-between"
            border="1px"
            border="1px" 
            borderRadius="md" 
            borderColor="gray.200"
          >
            <Text fontSize="xl" fontWeight="bolder" onClick={() => go('/')}>
              Help
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                variant="outline"
                variantColor="whity"
                aria-label="Menu"
                size="lg"
                icon="menu"
              ></MenuButton>
              <MenuList>
                {!context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Home</MenuItem>
                    <MenuItem onClick={() => go('/login')}>Login</MenuItem>
                    <MenuItem onClick={() => go('/signup')}>Signup</MenuItem>
                  </>
                )}
                {context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Home</MenuItem>
                    <MenuItem onClick={() => go('/profile')}>Profile</MenuItem>
                    <MenuItem onClick={context.handleLogout}>Logout</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
export default withRouter(Navbar)