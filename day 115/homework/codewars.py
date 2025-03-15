#1 6kyuv
def likes(names):
    n = len(names)
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    elif n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {n - 2} others like this"

# ტესტები
print(likes([]))                                 # "no one likes this"
print(likes(["Peter"]))                          # "Peter likes this"
print(likes(["Jacob", "Alex"]))                  # "Jacob and Alex like this"
print(likes(["Max", "John", "Mark"]))            # "Max, John and Mark like this"
print(likes(["Alex", "Jacob", "Mark", "Max"]))   # "Alex, Jacob and 2 others like this"

#2 7kyu
def find_short(s):
    return min(len(word) for word in s.split())

# ტესტები
print(find_short("bitcoin take over the world maybe who knows perhaps"))  # 3
print(find_short("turns out random test cases are easier than writing out basic ones"))  # 3
print(find_short("Let's travel abroad shall we"))  # 2


#3 7kyu
def find_longest(numbers):
    return max(numbers, key=lambda x: len(str(x)))

# ტესტები
print(find_longest([1, 10, 100]))          # 100
print(find_longest([9000, 8, 800]))        # 9000
print(find_longest([123, 4567, 89, 12]))   # 4567
print(find_longest([5, 5, 5, 50000]))      # 50000
