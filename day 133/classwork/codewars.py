#1) (6 kyu)

def is_valid_walk(walk):
    return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')
Remove the smallest (8 kyu)

#2) (8kyu)
def remove_smallest(numbers):
    if not numbers:
        return []
    nums = numbers.copy()
    nums.remove(min(nums))
    return nums
 
#3) (6 kyu)

def triple_double(num1, num2):
    for d in '0123456789':
        if d*3 in str(num1) and d*2 in str(num2):
            return 1
    return 0
Binary Addition (7 kyu)

#4) (7 kyu)

def add_binary(a, b):
    return bin(a + b)[2:]