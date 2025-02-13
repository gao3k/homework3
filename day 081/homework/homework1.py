def bubble_sort(arr):
    n = len(arr)
    swapped = True
    while swapped:
        swapped = False
        for i in range(n - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
    return arr

# მაგალითი
array = [5, 2, 9, 1, 5, 6]
print(bubble_sort(array)) # [1, 2, 5, 5, 6, 9]
