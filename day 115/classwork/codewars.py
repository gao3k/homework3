#1 7kyu
def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 = int(p0 + p0 * (percent / 100)) + aug
        years += 1
    return years

# ტესტები
print(nb_year(1000, 2, 50, 1200))         # უნდა დააბრუნოს 3
print(nb_year(1500, 5, 100, 5000))          # უნდა დააბრუნოს 15
print(nb_year(1500000, 2.5, 10000, 2000000)) # უნდა დააბრუნოს 10

#2 8kyu
def are_you_playing_banjo(name):
    if name[0].lower() == 'r':
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"

# ტესტები
print(are_you_playing_banjo("Adam"))   # უნდა დააბრუნოს "Adam does not play banjo"
print(are_you_playing_banjo("Ringo"))  # უნდა დააბრუნოს "Ringo plays banjo"


#3 7kyu
def binary_array_to_number(arr):
    # შეერთებს ელემენტებს სტრინგში და გამოიყენებს int() ფუნქციას ორობითში.
    return int(''.join(map(str, arr)), 2)

# ტესტები:
print(binary_array_to_number([0, 0, 0, 1]))  # უნდა გამოიტანოს 1
print(binary_array_to_number([0, 0, 1, 0]))  # უნდა გამოიტანოს 2
print(binary_array_to_number([0, 1, 0, 1]))  # უნდა გამოიტანოს 5
print(binary_array_to_number([1, 0, 0, 1]))  # უნდა გამოიტანოს 9
print(binary_array_to_number([0, 1, 1, 0]))  # უნდა გამოიტანოს 6
print(binary_array_to_number([1, 1, 1, 1]))  # უნდა გამოიტანოს 15
print(binary_array_to_number([1, 0, 1, 1]))  # უნდა გამოიტანოს 11


#4 8kyu
def smash(words):
    return " ".join(words)

# ტესტები
words = ['hello', 'world', 'this', 'is', 'great']
print(smash(words))  # უნდა გამოიტანოს "hello world this is great"

#5 7kyu
def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]

# ტესტები
input_data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
print(open_or_senior(input_data))
# შედეგი: ["Open", "Open", "Senior", "Open", "Open", "Senior"]


#6  7kyu
def divisors(n):
    result = [i for i in range(2, n) if n % i == 0]
    return result if result else f"{n} is prime"

# ტესტები
print(divisors(12))  # უნდა დააბრუნოს [2, 3, 4, 6]
print(divisors(25))  # უნდა დააბრუნოს [5]
print(divisors(13))  # უნდა დააბრუნოს "13 is prime"

#7 7kyu
def dont_give_me_five(start, end):
    return sum('5' not in str(i) for i in range(start, end + 1))

# ტესტები
print(dont_give_me_five(1, 9))   # უნდა დააბრუნოს 8
print(dont_give_me_five(4, 17))  # უნდა დააბრუნოს 12


#8 7kyu
def binary_array_to_number(arr):
    # შეერთებს ელემენტებს სტრინგში და გამოიყენებს int() ფუნქციას ორობითში.
    return int(''.join(map(str, arr)), 2)

# ტესტები:
print(binary_array_to_number([0, 0, 0, 1]))  # უნდა გამოიტანოს 1
print(binary_array_to_number([0, 0, 1, 0]))  # უნდა გამოიტანოს 2
print(binary_array_to_number([0, 1, 0, 1]))  # უნდა გამოიტანოს 5
print(binary_array_to_number([1, 0, 0, 1]))  # უნდა გამოიტანოს 9
print(binary_array_to_number([0, 1, 1, 0]))  # უნდა გამოიტანოს 6
print(binary_array_to_number([1, 1, 1, 1]))  # უნდა გამოიტანოს 15
print(binary_array_to_number([1, 0, 1, 1]))  # უნდა გამოიტანოს 11

