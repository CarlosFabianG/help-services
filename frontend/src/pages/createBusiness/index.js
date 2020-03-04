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
    e.preventDefault()
    context
      .handleCreateBusinessSubmit(e)
      .then(response => {
        toast({
          title: 'Registro createdo.',
          description: "Tu registro ha sido creado satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/profile/myBusiness')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu registro',
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
            <Form submit={submit} bgColor="white" title="Crear Registro">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    defaultValue={context.state.formBusiness.name}
                    onChange={context.handleCreateBusiness}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="foto"
                    name="imageURL"
                    type="file"
                    defaultValue={context.state.formBusiness.imageURL}
                    onChange={context.handleCreateBusiness}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" />} />
                  <Input
                    onChange={context.handleCreateBusiness}
                    placeholder="address"
                    name="address"
                    type="text"
                    defaultValue={context.state.formBusiness.description}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="phone" />} />
                  <Input
                    placeholder="Nº teléfono"
                    name="phone"
                    type="text"
                    defaultValue={context.state.formBusiness.phone}
                    onChange={context.handleCreateBusiness}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="user" />} />
                  <Input
                    placeholder="Categoría"
                    name="category"
                    type="text"
                    defaultValue={context.state.formBusiness.category}
                    onChange={context.handleCreateBusiness}
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