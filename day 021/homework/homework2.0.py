def manual_count(lst, element=None):
    if element is None:
        total = 0
        for num in lst:
            total += num
        mean = int(total / len(lst))
        return mean
    else:
        count = 0
        for item in lst:
            if item == element:
                count += 1
        return count


my_list = [1, 2, 3, 4, 5, 3, 3, 2]


count_3 = manual_count(my_list, 3)
print("Number of occurrences of 3:", count_3)

count_7 = manual_count(my_list, 7)
print("Number of occurrences of 7:", count_7)

default_value = manual_count(my_list)
print("Default value:", default_value)
