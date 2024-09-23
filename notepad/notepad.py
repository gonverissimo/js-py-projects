import tkinter as tk
from tkinter import simpledialog, messagebox, filedialog
import os

class NotesApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Notes App")

        # Create the UI layout
        self.create_widgets()

        # Variable to hold the current file name
        self.current_file = None

    def create_widgets(self):
        # Create menu
        self.menu = tk.Menu(self.root)
        self.root.config(menu=self.menu)

        file_menu = tk.Menu(self.menu, tearoff=False)
        self.menu.add_cascade(label="File", menu=file_menu)
        file_menu.add_command(label="New Note", command=self.new_note)
        file_menu.add_command(label="Open Note", command=self.open_note)
        file_menu.add_command(label="Save Note", command=self.save_note)
        file_menu.add_command(label="Save As", command=self.save_as_note)
        file_menu.add_command(label="Delete Note", command=self.delete_note)
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.root.quit)

        # Create text area
        self.text_area = tk.Text(self.root, wrap='word', font=("Arial", 14))
        self.text_area.pack(expand=True, fill='both')

        # Search functionality
        search_frame = tk.Frame(self.root)
        search_frame.pack(side='top', fill='x')

        self.search_var = tk.StringVar()
        search_entry = tk.Entry(search_frame, textvariable=self.search_var)
        search_entry.pack(side='left', padx=10, pady=5)

        search_button = tk.Button(search_frame, text="Search", command=self.search_note)
        search_button.pack(side='left', padx=5)

    def new_note(self):
        if messagebox.askyesno("New Note", "Are you sure you want to create a new note? Unsaved changes will be lost."):
            self.text_area.delete(1.0, tk.END)
            self.current_file = None

    def open_note(self):
        file_path = filedialog.askopenfilename(filetypes=[("Text Files", "*.txt")])
        if file_path:
            with open(file_path, 'r') as file:
                self.text_area.delete(1.0, tk.END)
                self.text_area.insert(tk.END, file.read())
            self.current_file = file_path

    def save_note(self):
        if self.current_file:
            with open(self.current_file, 'w') as file:
                file.write(self.text_area.get(1.0, tk.END))
            messagebox.showinfo("Saved", "Note saved successfully!")
        else:
            self.save_as_note()

    def save_as_note(self):
        file_path = filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Text Files", "*.txt")])
        if file_path:
            with open(file_path, 'w') as file:
                file.write(self.text_area.get(1.0, tk.END))
            self.current_file = file_path
            messagebox.showinfo("Saved", "Note saved successfully!")

    def delete_note(self):
        if self.current_file:
            if messagebox.askyesno("Delete Note", "Are you sure you want to delete this note?"):
                os.remove(self.current_file)
                self.text_area.delete(1.0, tk.END)
                self.current_file = None
                messagebox.showinfo("Deleted", "Note deleted successfully!")
        else:
            messagebox.showerror("Error", "No note currently opened!")

    def search_note(self):
        query = self.search_var.get()
        content = self.text_area.get(1.0, tk.END)
        if query in content:
            start_idx = content.index(query)
            end_idx = start_idx + len(query)
            self.text_area.tag_add("highlight", f"1.0+{start_idx}c", f"1.0+{end_idx}c")
            self.text_area.tag_config("highlight", background="yellow")
        else:
            messagebox.showinfo("Search", "No matching text found.")

if __name__ == "__main__":
    root = tk.Tk()
    app = NotesApp(root)
    root.geometry("600x400")
    root.mainloop()