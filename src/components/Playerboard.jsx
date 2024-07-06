import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";

export default function Playerboard({ player, symbol, isMobileDevice }) {
  return (
    <Flex
      flexDirection="column"
      gap={isMobileDevice ? "4" : "8"}
      justifyContent="center"
      alignItems="center"
      p={isMobileDevice ? "1rem" : "2rem"}
      borderRadius="1.5rem"
      boxShadow="5px 5px 10px #f5fb4f"
      bgColor=" #ccb3ff
"
    >
      <Heading
        fontSize={isMobileDevice ? "xl" : "3xl"}
        textDecor="underline solid"
      >
        {player}
      </Heading>
      {symbol === "X" ? (
        <CloseIcon boxSize={isMobileDevice ? 4 : 8} />
      ) : (
        <CheckIcon boxSize={isMobileDevice ? 4 : 8} />
      )}
    </Flex>
  );
}
