import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import "./App.css";
import { CardInstagram } from "./components/CardInstagram.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        p={"20px"}
        bg={"black"}
        color={"white"}
        w="100%"
        textTransform={"uppercase"}
        fontWeight={"700"}
        fontSize={"xx-large"}
      >
        Box
      </Box>
      <Button>Button</Button>
      <CardInstagram></CardInstagram>
    </>
  );
}

export default App;
