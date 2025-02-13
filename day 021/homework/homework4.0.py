def manual_max(lst=None):
    if lst is None:
        lst = []
        for i in range(1, 11):
            lst.append(i)  # Default list from 1 to 10
    
    max_val = lst[0]
    for num in lst:
        if num > max_val:
            max_val = num
    return max_val

print(manual_max())  # Operates on default list [1, 2, 3, ..., 10]
print(manual_max([5, 3, 9, 12, 7]))  # Passes a list, returns max from the list


#ეს კოდი განსაზღვრავს ფუნქციას `manual_max` რომელიც პოულობს სიაში მაქსიმალურ მნიშვნელობას. 
#თუ სია არ არის მოწოდებყლი, ის ნაგულისხმევია სიაში, რომელიც შეიცავს რიცხვებს 1-დან 10-მდე.
#ის იმეორებს სიას მაქსიმალური მნიშვნელობის მოსაძებნად და აბრუნებს მას.
#გამოყენების მაგალითი აჩვენებს მაქსიმალური მნიშვნელობის პოვნას ნაგულისხმევი სიიდან და მორგებული სიიდან.
