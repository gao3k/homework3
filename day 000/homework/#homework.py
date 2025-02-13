from turtle import *

speed(20)
width(5)
color("yellow")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#square end

color("yellow")
forward(70)
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)


penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


penup()
goto(0, 0)
pendown()
color("black", "white")
begin_fill()
for i in range(4):
    forward(50)
    left(90)
end_fill()

penup()
goto(0, 25)
pendown()
color("black")
forward(50)

penup()
goto(25, 0)
pendown()
left(90)
forward(50)

penup()
goto(-80, 0)
pendown()
right(90)
color("black", "white")
begin_fill()
for i in range(4):
    forward(50)
    left(90)
end_fill()

penup()
goto(-80, 25)
pendown()
color("black")
forward(50)

penup()
goto(-55, 0)
pendown()
left(90)
forward(50)
