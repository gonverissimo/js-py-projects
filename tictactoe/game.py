def print_board(board):
    print("\n")
    for row in board:
        print(" | ".join(row))
        print("-" * 5)
    print("\n")


def check_winner(board, player):
    # Verifica as linhas, colunas e diagonais
    for row in board:
        if row.count(player) == 3:
            return True

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == player:
            return True

    if board[0][0] == board[1][1] == board[2][2] == player or board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False


def is_full(board):
    for row in board:
        if " " in row:
            return False
    return True


def tic_tac_toe():
    # Cria o tabuleiro 3x3
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"

    while True:
        print_board(board)
        print(f"É a vez do jogador {current_player}.")

        try:
            row, col = map(int, input("Escolha a linha e a coluna (0-2) separadas por um espaço: ").split())

            if board[row][col] != " ":
                print("Essa posição já está ocupada. Tente novamente.")
                continue

            board[row][col] = current_player

            if check_winner(board, current_player):
                print_board(board)
                print(f"Parabéns! O jogador {current_player} venceu!")
                break

            if is_full(board):
                print_board(board)
                print("Empate!")
                break

            # Troca o jogador
            current_player = "O" if current_player == "X" else "X"

        except (ValueError, IndexError):
            print("Entrada inválida. Certifique-se de inserir dois números entre 0 e 2.")

tic_tac_toe()
