#1) (6 kyu)

def solution(number):
    return sum(i for i in range(number) if i % 3 == 0 or i % 5 == 0)

#2) (8 kyu)

def str_count(string, letter):
    return string.count(letter)

#3) (8 kyu)


def basic_op(operator, value1, value2):
    return eval(f'{value1}{operator}{value2}')