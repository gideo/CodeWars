# 7kyu - Ordered Count of Characters

# Count the number of occurrences of each character and return it as a 
# list of tuples in order of appearance.

# Example:

# ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), 
# ('d', 1)]

from collections import OrderedDict, Counter


class OrderedCounter(Counter, OrderedDict):
    pass


def ordered_count(s):
    return list(OrderedCounter(s).items())