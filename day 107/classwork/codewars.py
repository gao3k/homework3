#7kyu
def bin_rota(seating_plan):
    rota = []
    
    for i, row in enumerate(seating_plan):
        if i % 2 == 0:
            rota.extend(row)  # Left to right
        else:
            rota.extend(row[::-1])  # Right to left
            
    return rota

# Test cases
print(bin_rota([
    ["Bob","Nora"],
    ["Ruby","Carl"]]))  # ["Bob", "Nora", "Carl", "Ruby"]

print(bin_rota([["Billy"]]))  # ["Billy"]

print(bin_rota([["Billy", "Nancy"]]))  # ["Billy", "Nancy"]

print(bin_rota([
    ["Billy"],
    ["Megan"],
    ["Aki"],
    ["Arun"],
    ["Joy"]]))  # ["Billy", "Megan", "Aki", "Arun", "Joy"]

print(bin_rota([
    ["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],
    ["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],
    ["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]]))  
# ["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza",
# "Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy",
# "Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]

#8kyu
def multi_table(number):
    return "\n".join(f"{i} * {number} = {i * number}" for i in range(1, 11))

# Test cases
print(multi_table(5))
print(multi_table(1))
