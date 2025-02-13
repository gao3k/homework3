password = "secretword"


while True:
    guess = input("Enter your password: ")
    repeat_guess = input("Repeat your password: ")

    if guess == repeat_guess:
        if guess == password:
            print("Access granted")
            break
        else:
            print("Your password is incorrect. Please try again.")
    else:
        print("Passwords do not match. Please try again.")

