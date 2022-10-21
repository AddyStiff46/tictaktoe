const playerFactory = (name, mark, turn) => {
    return {name, mark, turn}
}
const player1 = playerFactory("Player 1", "X", true)
const player2 = playerFactory("Player 2", "O", false)

const gameBoard = (() => {
    const spaces = [9]
    const rows = [1, 2, 3]
    const columns = [a, b, c]
})