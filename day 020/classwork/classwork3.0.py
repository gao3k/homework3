my_list = ["nika", "data", "sandro", "mate"]
my_list.insert(2, "gabrieli")
my_list.insert(3, "khachapuri")
print(my_list)


my_list = ["nika", "data", "sandro", "mate"]
my_list.pop(0)
print(my_list)
# #ვისწავლეთ 
# .append() ფუნქცია
#.insert() ფუნქცია
#.pop() ფუნქცია
#len() ფუნქცია

# .append() --> დამატება
# list --> ინახავს რამდენიმე ელემენტს ერთად

int_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in int_list[:]:
    if i % 2 != 0:
        ind = int_list.index(i)
        int_list.pop(ind)

print(int_list)



int_list = [1,2,3,4,5,6,7,8,9]
even_list = []
for i in int_list:
    if i % 2 == 0:
        even_list.append(i)
print(even_list)
