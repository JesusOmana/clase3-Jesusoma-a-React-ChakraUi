import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardProduct } from "./Components/Product/CardProduct";
import { Nadvar1 } from "./Components/nadvar/nadvar";
import { Example1 } from "./Components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const products = [
    {
      id: "product001",
      name: "Echeveria elegans",
      description:
        "La planta echeveria, también llamada rosa de alabastro, es en realidad todo un género de plantas crasas que forma parte de la familia Crassulaceae. Sin embargo, cuando se habla de la rosa de alabastro o de la planta echeveria, lo común es que nos refiramos a la Echeveria elegans, la más común en jardinería gracias tanto a su belleza como a la gran resistencia que ostentan.",
      price: 11.299,
      sku: "suculenta001",
      stock: 12,
      image:
        "https://th.bing.com/th/id/OIP.TQ0R5CS96fL02ZeND-mesQHaHa?rs=1&pid=ImgDetMain",
      soleado: true,
    },
  ];

  return (
    <>
      <div>
        <ChakraProvider>
          <Nadvar1 />
          {products.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              sku={product.sku}
              stock={product.stock}
              image={product.image}
              soleado={product.soleado}
            ></CardProduct>
          ))}
          <Example1 />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
