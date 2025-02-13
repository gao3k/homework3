#8 kyu
def points(matches):
    total_points = 0
    for match in matches:
        x, y = map(int, match.split(':'))  # Split the string and convert to integers
        if x > y:
            total_points += 3  # Win
        elif x == y:
            total_points += 1  # Draw
        # Loss (x < y) gives 0 points, so we do nothing
    return total_points

# Example test cases
print(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))  # 30
print(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))  # 10
print(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']))  # 0
print(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']))  # 15
print(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))  # 12
