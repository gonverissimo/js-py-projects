import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic Tac Toe")
        self.player = "X"
        self.buttons = [[None for _ in range(3)] for _ in range(3)]
        self.create_board()
        self.game_over = False

    def create_board(self):
        for row in range(3):
            for col in range(3):
                button = tk.Button(self.root, text=" ", font=('normal', 40), width=5, height=2,
                                   command=lambda r=row, c=col: self.player_move(r, c))
                button.grid(row=row, column=col)
                self.buttons[row][col] = button

    def player_move(self, row, col):
        if not self.game_over and self.buttons[row][col]["text"] == " ":
            self.buttons[row][col]["text"] = self.player
            if self.check_winner(self.player):
                self.game_over = True
                messagebox.showinfo("Game Over", f"Player {self.player} wins!")
            elif self.is_full():
                self.game_over = True
                messagebox.showinfo("Game Over", "It's a tie!")
            else:
                self.player = "O"
                self.ai_move()

    def ai_move(self):
        if not self.game_over:
            # Get the best move from Minimax
            best_move = self.find_best_move()
            if best_move:
                row, col = best_move
                self.buttons[row][col]["text"] = "O"
                if self.check_winner("O"):
                    self.game_over = True
                    messagebox.showinfo("Game Over", "AI wins!")
                elif self.is_full():
                    self.game_over = True
                    messagebox.showinfo("Game Over", "It's a tie!")
                else:
                    self.player = "X"

    def check_winner(self, player):
        # Check rows, columns, and diagonals for a win
        for row in range(3):
            if all(self.buttons[row][col]["text"] == player for col in range(3)):
                return True
        for col in range(3):
            if all(self.buttons[row][col]["text"] == player for row in range(3)):
                return True
        if all(self.buttons[i][i]["text"] == player for i in range(3)) or \
           all(self.buttons[i][2-i]["text"] == player for i in range(3)):
            return True
        return False

    def is_full(self):
        # Check if all cells are filled
        return all(self.buttons[row][col]["text"] != " " for row in range(3) for col in range(3))

    def minimax(self, is_maximizing):
        # Check for terminal states
        if self.check_winner("O"):
            return 1
        if self.check_winner("X"):
            return -1
        if self.is_full():
            return 0

        if is_maximizing:
            best_score = -float('inf')
            for row in range(3):
                for col in range(3):
                    if self.buttons[row][col]["text"] == " ":
                        self.buttons[row][col]["text"] = "O"
                        score = self.minimax(is_maximizing=False)
                        self.buttons[row][col]["text"] = " "
                        best_score = max(score, best_score)
            return best_score
        else:
            best_score = float('inf')
            for row in range(3):
                for col in range(3):
                    if self.buttons[row][col]["text"] == " ":
                        self.buttons[row][col]["text"] = "X"
                        score = self.minimax(is_maximizing=True)
                        self.buttons[row][col]["text"] = " "
                        best_score = min(score, best_score)
            return best_score

    def find_best_move(self):
        best_score = -float('inf')
        best_move = None
        for row in range(3):
            for col in range(3):
                if self.buttons[row][col]["text"] == " ":
                    self.buttons[row][col]["text"] = "O"
                    score = self.minimax(is_maximizing=False)
                    self.buttons[row][col]["text"] = " "
                    if score > best_score:
                        best_score = score
                        best_move = (row, col)
        return best_move

# Run the game
if __name__ == "__main__":
    root = tk.Tk()
    game = TicTacToe(root)
    root.mainloop()