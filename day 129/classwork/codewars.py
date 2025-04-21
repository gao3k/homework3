#1) 7kyu 
def pattern(n):
    return '\n'.join(str(i) * i for i in range(1, n+1))

#2) 7kyu 
def array_mash(a, b):
    return [x for pair in zip(a, b) for x in pair]
 
 #3) 7kyu 
 def repeat_it(string, n):
    return string * n if isinstance(string, str) else 'Not a string'

#4) kyu 
def words_to_marks(s):
    return sum(ord(c) - 96 for c in s)
 
#5) 8kyu
def odd_count(n):
    return n // 2


#6) 7kyu
def in_asc_order(arr):
    return arr == sorted(arr)
