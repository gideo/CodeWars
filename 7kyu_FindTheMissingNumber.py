# 7kyu - Find the Missing Number 

# The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

# You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

def missing_no(nums):
    return 100*101//2 - sum(nums)