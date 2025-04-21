
#1)Kyu: 7

def summation(num):
    return sum(range(1, num+1))

#2)Kyu: 7

def summation(num):
    return sum(range(1, num+1))

#3)Kyu: 7

def opposite(n):
    return -n

#4)Kyu: 7

def getCount(string):
    return sum(1 for char in string if char in 'aeiou')

#5)Kyu: 7


def count_by(x, n):
    return [x * i for i in range(1, n + 1)]

#6)Kyu: 7

def is_number(s):
    return s.isdigit()

#7)Kyu: 7

def palindrome(s):
    return s == s[::-1]

#8)Kyu: 7

def sequence_sum(start, end, step):
    return sum(range(start, end+1, step))