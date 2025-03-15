#7kyu
def elevator_distance(floors):
    return sum(abs(floors[i] - floors[i - 1]) for i in range(1, len(floors)))

# Test cases
print(elevator_distance([5, 2, 8]))  # 9
print(elevator_distance([1, 2, 3]))  # 2
print(elevator_distance([7, 1, 7, 1]))  # 18
print(elevator_distance([3, 3]))  # 0


def find_twins(numbers):
    counts = {}  # Dictionary to count occurrences of each number

    for num in numbers:
        counts[num] = counts.get(num, 0) + 1  # Increase count for each number

    for num, count in counts.items():
        if count == 2:  # The number appears exactly twice
            return num
    
    return None  # No twins found

# Test cases
print(find_twins([1, 2, 3, 2]))  # 2
print(find_twins([5, 7, 9, 7, 11]))  # 7
print(find_twins([4, 6, 8, 10]))  # None (no twins)
print(find_twins([12, 13, 14, 15, 12]))  # 12
print(find_twins([1, 1, 2, 2, 3, 3]))  # 1 (first twin found)
print(find_twins([9, 8, 7, 6, 8, 5, 9]))  # 8 (first twin found)