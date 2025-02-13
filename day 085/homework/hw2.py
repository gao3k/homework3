def check_vowel_consonant(ch):
    vowels = 'aeiou'
    if ch in vowels:
        return "ხმოვანი"
    else:
        return "თანხმოვანი"

# კონსოლიდან შეყვანა
ch = input("შეიტანეთ სიმბოლო: ").lower()

# შემოწმება და შედეგის დაბეჭდვა
result = check_vowel_consonant(ch)
print(f"სიმბოლო '{ch}' არის {result}")
