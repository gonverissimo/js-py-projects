import turtle

# Função para desenhar um retângulo com cor
def draw_rectangle(t, width, height, color):
    t.begin_fill()
    t.fillcolor(color)
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Configuração inicial
screen = turtle.Screen()
screen.title("Bandeira de Portugal")
t = turtle.Turtle()
t.speed(3)

# Dimensões
width = 300
height = 200

# Parte verde
t.penup()
t.goto(-150, 100)
t.pendown()
draw_rectangle(t, width // 3, height, "green")

# Parte vermelha
t.penup()
t.goto(-50, 100)
t.pendown()
draw_rectangle(t, 2 * width // 3, height, "red")

# Parte amarela
t.penup()
t.goto(-50, 160)
t.pendown()
t.begin_fill()
t.fillcolor("yellow")
t.circle(40)
t.end_fill()


t.hideturtle()

turtle.done()