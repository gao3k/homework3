def count_left_symbols(n, symbols):
    symbol_counts = {}
    result = []
    
    for symbol in symbols:
        if symbol in symbol_counts:
            result.append(symbol_counts[symbol])
            symbol_counts[symbol] += 1
        else:
            result.append(0)
            symbol_counts[symbol] = 1
    
    return result

# შესავალი
n = int(input("შეიტანე სიმბოლოების რაოდენობა: "))
symbols = [input(f"სიმბოლო {i+1}: ") for i in range(n)]

# დამუშავება და გამოსავალი
counts = count_left_symbols(n, symbols)
for i in range(n):
    print(f"სიმბოლო {symbols[i]}: {counts[i]} მარცხნივ მყოფი")
