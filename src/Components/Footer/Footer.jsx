import React from "react";
import { Stack, Button, Flex } from "@chakra-ui/react";

const Example1 = ({}) => {
  return (
    <Flex bg="#a6e4d1" h="15vh" align={{ base: "center" }} justify="center">
      <Stack direction="row" spacing="25px">
        <Button
          as="a"
          href="https://www.google.com/"
          colorScheme="teal"
          variant="link"
        >
          Home
        </Button>
        <Button
          as="a"
          href="https://www.google.com/"
          colorScheme="teal"
          variant="link"
        >
          Acerca de Nosotros
        </Button>
        <Button
          as="a"
          href="https://www.google.com/"
          colorScheme="teal"
          variant="link"
        >
          Contacto
        </Button>
      </Stack>
    </Flex>
  );
};

export { Example1 };
