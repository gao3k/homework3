def max_product_of_two(numbers):
    if len(numbers) != 4:
        raise ValueError("Exactly 4 numbers are required")
    
    max_product = float('-inf')
    pair = (None, None)
    
    for i in range(4):
        for j in range(i + 1, 4):
            product = numbers[i] * numbers[j]
            if product > max_product:
                max_product = product
                pair = (numbers[i], numbers[j])
    
    return max_product, pair

# შეყვანილი რიცხვები
numbers = [-10, 5, 7, 12]

max_product, pair = max_product_of_two(numbers)

print(f"მაქსიმალური ნამრავლი არის {max_product} ({pair[0]} * {pair[1]})")
