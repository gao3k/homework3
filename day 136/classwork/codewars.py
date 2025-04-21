#1)7kyu
def balanced_num(number):
    s = str(number)
    l = len(s)
    mid = l // 2
    if l <= 2:
        return "Balanced"
    left = s[:mid-1] if l % 2 == 0 else s[:mid]
    right = s[mid+1:]
    return "Balanced" if sum(map(int, left)) == sum(map(int, right)) else "Not Balanced"
