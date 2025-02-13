#7 kyu

#1) def to_jaden_case(string):
    #list = string.split()
    #new_list = [i.capitalize() for i in list]
    #return ' '.join(new_list)

#2)def accum(s):
    #i = 0
    #result = ''
    #for letter in s:
        #result += letter.upper() + letter.lower() * i + '-'
       # i += 1
    #return result[:len(result)-1]

#3) def remove_smallest(numbers):
   # a = numbers[:]
   # if a:
      #  a.remove(min(a))
   # return a

#8 kyu

#1) def litres(time):
   # return time // 2

#2) def paperwork(n, m):
   # if m<0 or n<0:
       # return 0
   # else:
       # return n*m

#3)def grow(arr):
	#product = 1
	#for i in arr:
		#product *= i
	#return product

#4)def fake_bin(x):
   # result = ""
   # for i in x:
       # if int(i) < 5:
          #  result = result + "0"
       # else:
          #  result = result + "1" 
            
   # return result
