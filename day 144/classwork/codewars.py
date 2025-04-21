
#1)Kyu:7 

def string_to_number(s):
    return int(s)

#2)Kyu:7

def multiply(a, b):
    return a * b

#3)Kyu:7

def reverse_string(s):
    return s[::-1]

#4)Kyu: 7

def area_or_perimeter(l, w):
    return l * w if l == w else 2 * (l + w)

#5)Kyu: 7

def get_middle(s):
    return s[(len(s)-1)//2:len(s)//2+1]

#6)Kyu: 7


def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

#7)Kyu: 7


def repeat_it(string, n):
    return string * n if isinstance(string, str) else "Not a string"
