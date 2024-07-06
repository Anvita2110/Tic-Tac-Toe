import { Flex, Heading, useMediaQuery, Text } from "@chakra-ui/react";
import Playerboard from "./components/Playerboard";
import Gameboard from "./components/Gameboard";

function App() {
  const [isMobileDevice] = useMediaQuery("(max-width: 900px)");
  return (
    <Flex flexDirection="column" bgColor="#dfc5fe">
      <Heading
        justifyContent="center"
        alignItems="center"
        p="3"
        h="10vh"
        display="flex"
        color="#f5fb4f"
        textShadow="3px 3px 0 #000000"
        m="0"
      >
        Tic-Tac-Toe By Anvita
      </Heading>
      <Flex
        h="90vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          marginBottom={isMobileDevice ? "1rem" : "4rem"}
          gap="4"
        >
          <Playerboard
            player="Player 1"
            symbol="X"
            isMobileDevice={isMobileDevice}
          />
          <Playerboard
            player="Player 2"
            symbol="O"
            isMobileDevice={isMobileDevice}
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          bgColor="#ccb3ff"
          boxShadow="5px 5px 10px #9e56e1"
          borderRadius="xl"
        >
          <Gameboard isMobileDevice={isMobileDevice} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
