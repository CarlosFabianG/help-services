import React, {useContext} from 'react'
import { MyContext } from '../context'
import { Stack, Image, Text, Button, Box, Flex, Input } from '@chakra-ui/core'


export default function CardProfile({ user, history }) {
  const go = path => history.push(path)
  const context = useContext(MyContext)
  return (
    <Box
      p={5}
      shadow="lg"
      borderWidth="1px"
      w="350px"
      mt="10vh"
      backgroundColor="whity.100"
      bor
    >
      <Stack spacing={3}>
        <Flex justify="center">
        <Image
          rounded="full"
          size="150px"
          src={user.photoUrl}
          alt={user.name}
        />
        </Flex>
        <Flex justify="center">
        <Text fontWeight="bold">{user.name}</Text>
        </Flex>
        <Flex justify="center">
        <Text fontWeight="bold">{user.email}</Text>
        </Flex>
        <Input placeholder="Cambiar imagen" type="file" name="photoUrl" onChange={context.uploadPhoto} />
        <Button
          onClick={() => go('/profile/config')}
          size="lg"
          color="white"
          variantColor="hotpurple"
          backgroundColor="hotpurple.500"
        >
          Editar perfil
        </Button>
        <Button
          onClick={() => go('/profile/create')}
          //href="./profile/create"
          size="lg"
          color="white"
          variantColor="hotpurple"
          backgroundColor="hotpurple.500"
        >
          Crear registro
        </Button>
      </Stack>
    </Box>
  )
}