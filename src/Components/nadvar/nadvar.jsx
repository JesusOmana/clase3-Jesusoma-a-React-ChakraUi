import React from "react";
import {
  Heading,
  Spacer,
  Button,
  ButtonGroup,
  Flex,
  Box,
} from "@chakra-ui/react";

const Nadvar1 = ({}) => {
  return (
    <Flex
      p="1vh"
      h="10vh"
      bg="#a6e4d1"
      minWidth="max-content"
      alignItems="center"
    >
      <Box>
        <Heading fontSize="2xl">Suculentas</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button as="a" href="https://www.google.com/" colorScheme="teal">
          tienda
        </Button>
        <Button as="a" href="https://www.google.com/" colorScheme="teal">
          carrito
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
export { Nadvar1 };
