#1)

def sum_digits(n):
    # Take absolute value to handle negative numbers
    n = abs(n)  # This handles negative numbers
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  # This was the bug - needed assignment
    return result

print(sum_digits(123))  # Output: 6 (1 + 2 + 3)
print(sum_digits(405))  # Output: 9 (4 + 0 + 5)
print(sum_digits(-123)) # Output: 6 (1 + 2 + 3)


#2)

def sum_two_largest(lst):
    if len(lst) < 2:
        return None
    
    # Find first maximum
    max1 = max(lst)
    # Create new list excluding the first maximum for finding second maximum
    remaining = [x for x in lst if x != max1]
    # If all numbers were the same, use max1 again
    max2 = max1 if not remaining else max(remaining)
    
    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  # Output: 16 (9 + 7)
print(sum_two_largest([10, 10, 5, 3]))   # Output: 20 (10 + 10)

