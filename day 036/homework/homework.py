#        key  >   value
dict1 = {'name': 'saba',
         'age': 16,
         'salary': 500000}
dict2 = {'name': 'gio',
         'age': 13,
         'salary': 300000}
dict3 = {'name': 'sandro',
         'age': 20,
         'salary': 10000}
dict4 = {'name': 'deme',
         'age': 17,
         'salary': 200000}


list1 = []
list2 = []
list3 = []
list4 = []


for key, value in dict1.items():
    list1.append(value)

for key, value in dict2.items():
    list2.append(value)

for key, value in dict3.items():
    list3.append(value)

for key, value in dict4.items():
    list4.append(value)


joined_list = list1 + list2 + list3 + list4
print(joined_list)