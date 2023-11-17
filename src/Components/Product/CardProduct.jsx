import React from "react";
import {
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";

const CardProduct = ({
  name,
  description,
  price,
  sku,
  stock,
  image,
  soleado,
}) => {
  return (
    <Flex justify="center" minH="75vh" bg="#e1f6f0">
      <Stack
        p="5"
        direction={{ base: "column", sm: "column", md: "row" }}
        align={{ base: "center", sm: "center", md: "start" }}
      >
        <Box>
          <Image
            boxShadow="dark-lg"
            mt="20px"
            maxW={300}
            src={image}
            alt="Imagen de la Suculenta Echeveria Elegans"
            borderRadius="lg"
          />
        </Box>
        <Spacer p="30px" />
        <Box
          p="15px"
          maxW={{ base: "auto", md: 420 }}
          mx={{ base: 5, sm: 5, md: 0 }}
        >
          <Heading mb="30px" fontSize="4xl">
            {name}
          </Heading>
          <Text as="p" fontSize="2xl">
            {description}
          </Text>
          <Text mt="20px" fontSize="2xl">
            Clima Soleado: {soleado ? "Si" : "No"}
          </Text>
          <Text mt="20px" fontSize="2xl">
            Stock disponible: {stock + " unidades"}
          </Text>
          <Text>SKU:{sku}</Text>
          <Text mt="40px" color="#16583f" fontWeight="bold" fontSize="2xl">
            Costo ${price}{" "}
            <Button
              isDisabled={stock === 0 && "true"}
              p={{ base: "10px" }}
              ml="50px"
              boxShadow="dark-lg"
              variant="solid"
              colorScheme="teal"
            >
              Comprar
            </Button>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};
export { CardProduct };
