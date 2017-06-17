# 6kyu - Return 1, 2, 3 randomly

# You have function one_two that returns 1 or 2 with 50% chance.

# Your goal is to create function one_two_three that returns 1, 2 or 3 
# with equal probability using only one_two function.

def one_two_three():
    a = one_two()
    b = one_two()
    if a == 1 and b == 2: return 1
    if a == 2 and b == 1: return 2
    if b == 1 and b == 1: return 3
    return one_two_three()