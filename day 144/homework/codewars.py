
#1)Kyu:7

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positives = len([x for x in arr if x > 0])
    negatives = sum(x for x in arr if x < 0)
    return [positives, negatives]

#2) Kyu:7


def square_numbers(arr):
    return [x**2 for x in arr]

#3)Kyu:7


def count_bits(n):
    return bin(n).count('1')

#4)Kyu7


def remove_duplicates(lst):
    return list(set(lst))