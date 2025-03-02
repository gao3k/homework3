#7kyu
def shift_letters(s: str) -> str:
    max_shift = max(ord(c) - ord('A') for c in s)  # Find the max shift to determine output length
    result = [' '] * (max_shift + 1)  # Create a list of spaces to hold shifted characters
    
    for i, c in enumerate(s):
        index = ord(c) - ord('A')  # Compute shift index
        result[index] = c  # Place character at its shifted position
    
    return ''.join(result)  # Convert list back to string

# Test cases
print(shift_letters("AZ"))  # "A                         Z"
print(shift_letters("ABC"))  # "A B C"
print(shift_letters("ACE"))  # "A  C  E"
print(shift_letters("CBA"))  # "  C B A"
print(shift_letters("HELLOWORLD"))  # "     H E  LLO  W O R L D"
