import { Flex, Heading } from "@chakra-ui/react";
import Playerboard from "./components/Playerboard";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <Flex flexDirection="column" bgColor="#dfc5fe">
      <Heading
        justifyContent="center"
        alignItems="center"
        p="4"
        h="15vh"
        display="flex"
        color="#f5fb4f"
        textShadow="3px 3px 0 #000000"
      >
        Tic-Tac-Toe By Anvita
      </Heading>
      <Flex h="85vh" justifyContent="center" alignItems="center">
        <Flex flexGrow={1} justifyContent="end" alignItems="center">
          <Playerboard player="Player 1" symbol="X" />
        </Flex>
        <Flex
          flexGrow={3}
          justifyContent="center"
          alignItems="center"
          bgColor="#ccb3ff"
          boxShadow="5px 5px 10px #9e56e1"
          width="2%"
          py="6%"
          mx="6%"
          borderRadius="xl"
        >
          <Gameboard />
        </Flex>
        <Flex flexGrow={1} justifyContent="start" alignItems="center">
          <Playerboard player="Player 2" symbol="O" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
