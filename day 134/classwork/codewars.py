#1) 7kyu
def find_longest(arr):
    return max(arr, key=lambda x: len(str(abs(x))))

#2) მასივის ლარებად გადაყვანა
def convert_to_lari(dollars, rate=2.7):
    return [d * rate for d in dollars]

#3)პალინდრომების ფილტრაცია

def filter_palindromes(words):
    return [word for word in words if word == word[::-1]]

#4)კრედიტ ბარათის მასკირება
def maskify(cc_list):
    return ['*' * (len(card) - 4) + card[-4:] for card in cc_list]

#5)toObj ფუნქცია
def to_obj(matrix):
    return {key: value for key, value in matrix}

#6)სახელების სორტირება
def sort_names(data):
    return sorted([d['name'] for d in data])

