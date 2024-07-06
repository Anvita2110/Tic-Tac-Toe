import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";

export default function Playerboard({ player, symbol }) {
  return (
    <Flex
      flexDirection="column"
      gap="8"
      justifyContent="center"
      alignItems="center"
      // border="solid 2px"
      h="25%"
      p="2rem"
      borderRadius="1.5rem"
      boxShadow="5px 5px 10px #f5fb4f"
      bgColor=" #ccb3ff
"
    >
      <Heading textDecor="underline solid">{player}</Heading>
      {symbol === "X" ? <CloseIcon boxSize={8} /> : <CheckIcon boxSize={8} />}
    </Flex>
  );
}
