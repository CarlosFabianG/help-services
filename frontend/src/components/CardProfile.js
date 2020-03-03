import React from 'react'
import { Stack, Image, Text, Button, Box, Flex } from '@chakra-ui/core'
export default function CardProfile({ user, history }) {
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
        <Button
          to="./config"
          size="lg"
          color="white"
          variantColor="hotpink"
          backgroundColor="hotpink.500"
        >
          Editar perfil
        </Button>
      </Stack>
    </Box>
  )
}