#6kyu 
def persistence(num):
    count = 0
    while num >= 10:
        num = eval('*'.join(str(num)))
        count += 1
    return count


#7kyu
def find_unique_number(arr):
    unique = 0
    for num in arr:
        unique ^= num
    return unique


def difference(lst):
    if len(lst) < 2:
        return 0
    return max(lst) - min(lst)

#8kyu
def respond_to_dogs(num_dogs):
    if num_dogs == 1:
        return "You have 1 dog, that's wonderful!"
    elif num_dogs == 2:
        return "You have 2 dogs, that's great!"
    elif num_dogs == 3:
        return "You have 3 dogs, that's amazing!"
    elif num_dogs > 3:
        return "Wow, you have multiple dogs! How exciting!"
    else:
        
        return "Unexpected number of dogs!"



def box_dimensions(length, width, height):
    
    area = 2 * (length * width + width * height + height * length)
    
  
    volume = length * width * height
    
 
    return [area, volume]



digitized_text = "Th1s 1s a test text w1th some err0rs."
corrected_text = correct_text(digitized_text)
print(corrected_text)  # Output: "This IS a test text with some errors."
