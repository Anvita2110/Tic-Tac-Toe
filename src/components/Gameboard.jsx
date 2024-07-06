import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import { checkWinner } from "../utils/utils.js";

const GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [isX, setIsX] = useState(true);
  const [gameBoard, setGameBoard] = useState(GAME_BOARD);
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);

  console.log(winner);

  function handleClick(rowIdx, colIdx) {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((col) => [...col])];
      updatedBoard[rowIdx][colIdx] = isX ? "X" : "O";
      setWinner(checkWinner(updatedBoard));
      return updatedBoard;
    });
    setIsX((prev) => !prev);
    setCount((prevCount) => prevCount + 1);
  }

  function handleClose() {
    setGameBoard([...GAME_BOARD.map((item) => [...item])]);
    setWinner(null);
    setCount(0);
    setIsX(true);
  }

  return (
    <Flex flexDirection="column" gap="0.5rem">
      <Modal isOpen={winner != null || count === 9} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Heading color="#9e56e1">Game Over</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {count === 9 && winner === null ? (
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                It's a Draw
              </Text>
            ) : (
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                The winner is {winner === "X" ? "Player 1" : "Player 2"}
              </Text>
            )}
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="purple" mr={3} onClick={handleClose}>
              Play Again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {winner != null ? <Text> The winner is {winner}</Text> : null}
      {count === 9 ? <Heading>It's a draw!</Heading> : null}
      {gameBoard.map((row, rowIdx) => (
        <Flex gap="0.5rem" justifyContent="center">
          {row.map((col, colIdx) => (
            <IconButton
              icon={
                gameBoard[rowIdx][colIdx] === "X" ? (
                  <CloseIcon boxSize={6} />
                ) : gameBoard[rowIdx][colIdx] === null ? null : (
                  <CheckIcon boxSize={6} />
                )
              }
              onClick={() => handleClick(rowIdx, colIdx)}
              isDisabled={gameBoard[rowIdx][colIdx] != null}
              style={{
                height: "100px",
                width: "100px",
              }}
              boxShadow="5px 5px 10px #3d3d3d"
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
