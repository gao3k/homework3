#7kyu
def number_lines(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]

# Examples
print(number_lines([]))           # []
print(number_lines(["a", "b", "c"]))  # ["1: a", "2: b", "3: c"]


#8kyu
def bonus_time(salary, bonus):
    if bonus:
        return f"${salary * 10}"
    else:
        return f"${salary}"

# Examples
print(bonus_time(10000, True))  # "$100000"
print(bonus_time(25000, False)) # "$25000"


#7kyu
def min_max(lst):
    return [min(lst), max(lst)]

# Examples
print(min_max([1, 2, 3, 4, 5]))  # [1, 5]
print(min_max([2334454, 5]))     # [5, 2334454]
print(min_max([1]))              # [1, 1]


#8kyu
def sum_mix(arr):
    return sum(int(x) for x in arr)

# Examples
print(sum_mix([1, "2", "3", 4]))  # 10
print(sum_mix(["10", 20, 30, "40"]))  # 100
