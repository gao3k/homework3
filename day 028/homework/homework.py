#6 kyu
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
#Additionally, if the number is negative, return 0.
#Note: If the number is a multiple of both 3 and 5, only count it once.

def sum_multiples_of_3_or_5(number):
    total_sum = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            total_sum += i
    return total_sum

#მაგალითი:
number = 10
print(sum_multiples_of_3_or_5(number))  # ეს კოდი გამოიყვანს ციფრ 23-ს:

 

#1. ფუნქცია შესაყვანად იღებს რიცხვს.
#2. ის იმეორებს თითოეულ რიცხვს 0-დან შეყვანის რიცხვამდე მინუს ერთი.
#3. თითოეული რიცხვისთვის ის ამოწმებს იყოფა თუ არა 3-ზე ან 5-ზე.
#4. თუ არის, ამატებს ჯამურ ჯამს.
#5. ბოლოს აბრუნებს ყველა ასეთი რიცხვის ჯამურ ჯამს.   

#დამატებით თუ რიცხვი უარყოფითია დააბრუნეთ 0.
  
def sum_multiples_of_3_or_5(number):
    if number < 0:
        return 0
    return sum(i for i in range(number) if i % 3 == 0 or i % 5 == 0)





