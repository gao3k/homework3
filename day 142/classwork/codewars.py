
#1) Kyu:7


def find_average(nums):
    return sum(nums) / len(nums) if nums else 0

#2)Kyu: 7

def unique_in_order(sequence):
    result = []
    for char in sequence:
        if not result or result[-1] != char:
            result.append(char)
    return result