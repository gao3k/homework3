#1
# def compare_strings(str1, str2):
   # def ascii_sum(s):
      #  if s is None or not s.isalpha():
           # return 0
       # return sum(ord(char) for char in s.upper())

   # return ascii_sum(str1) == ascii_sum(str2)

# Examples
#print(compare_strings("AD", "BC"))  # True
#print(compare_strings("AD", "DD"))  # False
#print(compare_strings("gf", "FG"))  # True
#print(compare_strings("zz1", ""))   # True
#print(compare_strings("ZzZz", "ffPFF"))  # True
#print(compare_strings("kl", "lz"))  # False
#print(compare_strings(None, ""))    # True\


#2
# def process_list(lst):
    integers = [int(x) for x in lst if x.isdigit()]
    characters = ''.join([x for x in lst if x.isalpha()])
    
    mean_value = sum(integers) / len(integers)
    
    return [mean_value, characters]

# Example usage
lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
result = process_list(lst)
print(result)  # Output: [3.6, "udiwstagwo"]


#3
# def search_strings(query, array):
    query_lower = query.lower()
    found_strings = [s for s in array if query_lower in s.lower()]
    
    return found_strings if found_strings else ["None"]

# Examples
print(search_strings("me", ["home", "milk", "Mercury", "fish"]))  # Output: ["home", "Mercury"]
print(search_strings("xyz", ["home", "milk", "Mercury", "fish"]))  # Output: ["None"]


#4
# def triangular_number(n):
    return n * (n + 1) // 2

# Example usage
print([triangular_number(i) for i in range(10)])  # Output: [0, 1, 3, 6, 10, 15, 21, 28, 36, 45]


#5 
# def high_and_low(numbers):
    # Split the string into a list of integers
    num_list = list(map(int, numbers.split()))
    # Find the maximum and minimum values
    highest = max(num_list)
    lowest = min(num_list)
    # Return the result as a string
    return f"{highest} {lowest}"

# Examples
print(high_and_low("1 2 3 4 5"))  # Output: "5 1"
print(high_and_low("1 2 -3 4 5"))  # Output: "5 -3"
print(high_and_low("1 9 3 4 -5"))  # Output: "9 -5"


#6
def find_shortest_word_length(s):
    # Split the string into a list of words
    words = s.split()
    # Find the length of the shortest word
    shortest_length = min(len(word) for word in words)
    return shortest_length

# Examples
print(find_shortest_word_length("The quick brown fox jumps over the lazy dog"))  # Output: 3
print(find_shortest_word_length("Hello this is a test"))  # Output: 1
print(find_shortest_word_length("Python programming is fun"))  # Output: 2


#7
def dna_complement(dna):
    # Create a dictionary to map each nucleotide to its complement
    complement = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    # Use a list comprehension to generate the complementary strand
    complementary_strand = ''.join(complement[nucleotide] for nucleotide in dna)
    return complementary_strand

# Examples
print(dna_complement("ATTGC"))  # Output: "TAACG"
print(dna_complement("GTAT"))   # Output: "CATA"


#8
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

def linked_list_to_string(node):
    # Initialize an empty list to store the node data
    result = []
    # Traverse the linked list
    while node is not None:
        # Append the data of the current node to the result list
        result.append(str(node.data))
        # Move to the next node
        node = node.next
    # Join the list into a string with ' -> ' as separator
    return ' -> '.join(result)

# Example usage
node3 = Node(3)
node2 = Node(2, node3)
node1 = Node(1, node2)

print(linked_list_to_string(node1))  # Output: "1 -> 2 -> 3"


#9
def count_occurrences(full_text, search_text):
    count = 0
    start = 0

    while start < len(full_text):
        pos = full_text.find(search_text, start)
        if pos != -1:
            count += 1
            start = pos + len(search_text)
        else:
            break

    return count

# Example usage:
full_text1 = "aa_bb_cc_dd_bb_e"
search_text1 = "bb"
print(count_occurrences(full_text1, search_text1))  # Output: 2

full_text2 = "aaabbbcccc"
search_text2 = "bbb"
print(count_occurrences(full_text2, search_text2))  # Output: 1


#10
def reverse_string(s):
    return s[::-1]

# Example usage:
print(reverse_string('world'))  # Output: 'dlrow'
print(reverse_string('word'))   # Output: 'drow'


#11
from datetime import date

def time_for_milk_and_cookies(dt):
    return dt.month == 12 and dt.day == 24

# Examples
print(time_for_milk_and_cookies(date(2013, 12, 24)))  # True
print(time_for_milk_and_cookies(date(2013, 1, 23)))   # False
print(time_for_milk_and_cookies(date(3000, 12, 24)))  # True



#12
def square_digits(num):
    return int(''.join(str(int(digit) ** 2) for digit in str(num)))

# Examples
print(square_digits(9119))  # 811181
print(square_digits(765))   # 493625


#13
def get_middle(s):
    mid = len(s) // 2
    if len(s) % 2 == 0:
        return s[mid-1:mid+1]
    else:
        return s[mid]

# Examples
print(get_middle("test"))    # "es"
print(get_middle("testing")) # "t"
print(get_middle("middle"))  # "dd"
print(get_middle("A"))       # "A"


#14
def accum(s):
    return '-'.join((char.upper() + char.lower() * i) for i, char in enumerate(s))

# Examples
print(accum("abcd"))    # "A-Bb-Ccc-Dddd"
print(accum("RqaEzty")) # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
print(accum("cwAt"))    # "C-Ww-Aaa-Tttt"



#15
def count_vowels(s):
    vowels = "aeiou"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

# Example usage:
input_string = "hello world"
print(count_vowels(input_string))  # Output: 3

