def special_numbers_count(n, numbers):
    count = 0
    special_numbers = []
    for number in numbers:
        if (number < 100 and (number % 3 == 0 and number % 6 != 0)) or (number % 5 == 0 and number % 10 != 0):
            count += 1
            special_numbers.append(number)
    return count, special_numbers

# შესავალი
n = int(input("შეიტანე რიცხვების რაოდენობა: "))
numbers = [int(input(f"რიცხვი {i+1}: ")) for i in range(n)]

# დამუშავება და გამოსავალი
count, special_numbers = special_numbers_count(n, numbers)
print(f"{count} რიცხვი აკმაყოფილებს პირობებს: {special_numbers}")
