#1
# ხელით შევსებული მასივი
array = [10, 20, 30, 40, 50]

# მე-2 და მე-4 ინდექსზე მყოფი ელემენტები
print("მე-2 ელემენტი:", array[2])
print("მე-4 ელემენტი:", array[4])
#2
# შეყვანილი რიცხვების რაოდენობა
N = int(input("შეიტანე რიცხვების რაოდენობა N: "))
numbers = []

# მასივის შევსება
for i in range(N):
    number = int(input(f"რიცხვი {i+1}: "))
    numbers.append(number)

# კენტ ინდექსზე მყოფი ელემენტების ბეჭდვა
print("კენტ ინდექსზე მყოფი ელემენტები:")
for i in range(1, N, 2):
    print(numbers[i])
#3
# 10 ელემენტიანი მასივი
array = []

# მასივის შევსება კონსოლიდან
for i in range(10):
    number = int(input(f"რიცხვი {i+1}: "))
    array.append(number)

# რიცხვების ორმაგება და ბეჭდვა
doubled_array = [x * 2 for x in array]
print("გაორმაგებული რიცხვები:", doubled_array)
#4
# შეყვანილი რიცხვების რაოდენობა
N = int(input("შეიტანე რიცხვების რაოდენობა N: "))
numbers = []
# მასივის შევსება
for i in range(N):
    number = int(input(f"რიცხვი {i+1}: "))
    numbers.append(number)

# შებრუნებული მასივის ბეჭდვა
reversed_numbers = numbers[::-1]
print("რიცხვები შებრუნებული თანმიმდევრობით:", reversed_numbers)
#5
# შეყვანილი რიცხვების რაოდენობა
N = int(input("შეიტანე რიცხვების რაოდენობა N: "))
numbers = []

# მასივის შევსება
for i in range(N):
    number = int(input(f"რიცხვი {i+1}: "))
    numbers.append(number)

# პირველ და ბოლო ელემენტების გადაცვლა
numbers[0], numbers[-1] = numbers[-1], numbers[0]

# გადაცვლილი მასივის ბეჭდვა
print("მომდევნო მასივი გადაცვლილი პირველი და ბოლო ელემენტით:", numbers)

#codewars
#1
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]
import codewars_test as test
from solution import feast

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(feast("great blue heron", "garlic naan"), True)
        test.assert_equals(feast("chickadee", "chocolate cake"), True)
        test.assert_equals(feast("brown bear", "bear claw"), False)

#2
def string_to_array(s):
    return s.split()
import codewars_test as test
from solution import string_to_array

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(string_to_array("Robin Singh"), ["Robin", "Singh"])
        test.assert_equals(string_to_array("CodeWars"), ["CodeWars"])
        test.assert_equals(string_to_array("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])
        test.assert_equals(string_to_array("1 2 3"), ["1", "2", "3"])
        test.assert_equals(string_to_array(""), [""])

#3
 def area_or_perimeter(length, width):
    if length == width:
        return length * width  # Area of the square
    else:
        return 2 * (length + width)  # Perimeter of the rectangle
import codewars_test as test
from solution import area_or_perimeter

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(area_or_perimeter(4, 4), 16)
        test.assert_equals(area_or_perimeter(6, 10), 32)
