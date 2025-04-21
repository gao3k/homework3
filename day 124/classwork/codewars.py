#1 8kyu
def set_alarm(employed, vacation):
    return employed and not vacation

#2) 6kyu
def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    return sorted([i**2 for i in array1]) == sorted(array2)

#3) 8kyu
def update_light(current):
    return {'green': 'yellow', 'yellow': 'red', 'red': 'green'}[current]

