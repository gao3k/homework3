def count_odd_digits(number):
    count = 0
    while number > 0:
        digit = number % 10
        if digit % 2 != 0:
            count += 1
        number = number // 10
    return count

# შესავალი და გამოსავალი
number = int(input("შეიტანე მთელი რიცხვი: "))
odd_count = count_odd_digits(number)
print(f"რიცხვი შედგება {odd_count} კენტი ციფრისგან")
