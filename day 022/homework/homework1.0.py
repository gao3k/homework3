def manual_count (list, elem):
    sum = 0
    for i in list:
        if i == elem:
            sum += 1
    print(sum)
manual_count([1,2,3,4,5,2,3,4,2], 2)