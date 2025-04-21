#1) 8kyu

def get_real_floor(n):
    if n <= 0:
        return n
    elif n < 13:
        return n - 1
    else:
        return n - 2


#2) 8kyu
def swap(values):
    values[0], values[1] = values[1], values[0]
    return values
