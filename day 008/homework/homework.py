password = "secretword"
guess = input("Enter your password: ")

while guess != password:
    print("Your password is incorrect. Please try again.")
    guess = input("Enter your password: ")

print("Access granted")