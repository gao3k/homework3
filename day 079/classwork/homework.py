import random

# შემთხვევითი გადახვევა Fisher-Yates ალგორითმით
def shuffle_array(arr):
    for i in range(len(arr) - 1, 0, -1):
        j = random.randint(0, i)
        arr[i], arr[j] = arr[j], arr[i]
    return arr

# მოსწავლეების დაყოფა ჯგუფებად
def group_students(students, num_groups=3):
    shuffled_students = shuffle_array(students[:])  # შემთხვევითი გადახვევა
    groups = [[] for _ in range(num_groups)]
    
    for idx, student in enumerate(shuffled_students):
        groups[idx % num_groups].append(student)
    
    return groups

# სტუდენტები სია
students = [f"Student {i}" for i in range(1, 17)]

grouped_students = group_students(students)

for idx, group in enumerate(grouped_students, start=1):
    print(f"Group {idx}: {group}")
