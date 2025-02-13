#7kyu
def sequence(n):
    return sorted(range(1, n + 1), key=str)

# Test cases
print(sequence(16))  # Output: [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
print(sequence(9))   # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


#7kyu

def is_flush(cards):
    return len(set(card[-1] for card in cards)) == 1

# Test cases
print(is_flush(["AS", "3S", "9S", "KS", "4S"]))  # True
print(is_flush(["AD", "4S", "7H", "KC", "5S"]))  # False
print(is_flush(["AD", "4S", "10H", "KC", "5S"])) # False
print(is_flush(["QD", "4D", "10D", "KD", "5D"])) # True



#8kyu
def sequence(n):
    return sorted(range(1, n + 1), key=str)

# Test cases
print(sequence(16))  # Output: [1, 10, 11, 12, 13, 14, 15, 16, 2
