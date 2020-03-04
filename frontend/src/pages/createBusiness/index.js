import React, { useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../../components/Form'
export default function CreateBusiness({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  const submit = e => {
    context
      .handleSignupSubmit(e)
      .then(response => {
        toast({
          title: 'Registro createdo.',
          description: "Tu registro ha sido creado satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/create')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu cuenta',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            mt="10vh"
            backgroundColor="whity.100"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Create Business">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={context.state.formSignup.name}
                    onChange={context.handleCreateBusinessSubmit}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={context.state.formSignup.imageURL}
                    onChange={context.handleCreateBusinessSubmit}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" />} />
                  <Input
                    onChange={context.handleCreateBusinessSubmit}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={context.state.formSignup.description}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={context.state.formSignup.address}
                    onChange={context.handleCreateBusinessSubmit}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={context.state.formSignup.phone}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="lock" />} />
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={context.state.formSignup.password}
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}