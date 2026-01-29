const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colindex, ) {
    //     setGameBoard((previousGameBoard) => {
    //         let updatedBoard = [... previousGameBoard.map(inneerArray => [...inneerArray])];
    //         updatedBoard[rowIndex][colindex] = activePlayerSymbol;
    //         return updatedBoard;
    //     } );

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colindex) => (
                    <li key={colindex}>
                        <button onClick={() => onSelectSquare(rowIndex, colindex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>)}
    </ol>
}