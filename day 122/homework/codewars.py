#1) Min + Max
#Kyu: 7 kyu


def min_max(lst):
    return [min(lst), max(lst)]
#2) Numbering Lines
#Kyu: 7 kyu


def number(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]
#3) Do I get a bonus?
#Kyu: 8 kyu


def bonus_time(salary, bonus):
    return f"£{salary * 10 if bonus else salary}"
#4) Credit Card Mask
#Kyu: 7 kyu


def maskify(cc):
    return cc[-4:].rjust(len(cc), '#')
5#) Double Char
#Kyu: 8 kyu


def double_char(s):
    return ''.join(c * 2 for c in s)