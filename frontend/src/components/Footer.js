import React from 'react'
import { Flex, Text } from '@chakra-ui/core'



function Footer() {
    return(
        <Flex 
        pos="block"
        mt="5vh"
        bottom={0}
        zIndex="99"
        backgroundColor="white"
        w="100vw"
        h="10vh"
        align="center"
        justify="center"
        border="1px"
        border="1px" 
        borderRadius="md" 
        borderColor="gray.200"
        >
    <Text textAlign="center" color="gray.500" fontSize="xs">
      Made with <span role="img">🥚🥚</span> by Carlos Fabián 
    </Text>
</Flex>

    )
}

export default Footer