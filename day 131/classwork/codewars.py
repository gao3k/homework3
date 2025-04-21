#1) 6kyu
def tower_builder(n_floors):
    return [(" " * (n_floors - i - 1) + "*" * (2 * i + 1) + " " * (n_floors - i - 1)) for i in range(n_floors)]


#2) 7kyu
def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        if ord(chars[i + 1]) != ord(chars[i]) + 1:
            return chr(ord(chars[i]) + 1)


#3) 6kyu
def sort_array(source_array):
    odds = sorted([x for x in source_array if x % 2 != 0])
    result = []
    odd_index = 0
    for num in source_array:
        if num % 2 == 0:
            result.append(num)
        else:
            result.append(odds[odd_index])
            odd_index += 1
    return result



#4) 7kyu
def is_isogram(string):
    return len(set(string.lower())) == len(string.lower())
