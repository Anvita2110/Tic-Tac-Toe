export function checkWinner(gameBoard) {
    for (let i=0; i < 3; i++) {
        if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
            return gameBoard[i][0];
        }
    }

    const firstRow = gameBoard[0];
    const secondRow = gameBoard[1];
    const thirdRow = gameBoard[2];
    for (let j=0; j < 3; j++) {
        if (firstRow[j] === secondRow[j] && firstRow[j] === thirdRow[j]) {
            return firstRow[j];
        }
    }

    if ((firstRow[0] === secondRow[1] && firstRow[0] === thirdRow[2]) || (firstRow[2] === secondRow[1] && firstRow[2] === thirdRow[0])) {
        return secondRow[1];
    }
    
    return null;
}