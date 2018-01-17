# 7kyu - Time to Watch a Parade!

# Let's watch a parade!
# Brief
# You're going to watch a parade, but you only care about one of the groups marching. 
# The parade passes through the street where your house is. Your house is at number 
# location of the street. Write a function parade_time that will tell you the times 
# when you need to appear to see all appearences of that group.

# Specifications
# You'll be given:

# A list of strings containing groups in the parade, in order of appearance. A group 
# may appear multiple times. You want to see all the parts of your favorite group.
# An positive integer with the location on the parade route where you'll be watching.
# An positive integer with the speed of the parade
# A string with the prefferred group you'd like to see
# You need to return the time(s) you need to be at the parade to see your favorite 
# group as a list of integers.

# It's possible the group won't be at your location at an exact time. In that case, 
# just be sure to get there right before it passes (i.e. the largest integer time 
# 	before the float passes the position).

# Example
# groups = ['A','B','C','D','E','F']
# location = 3
# speed = 2
# pref = 'C'
#                   v
# Locations: |0|1|2|3|4|5|6|7|8|9|...
# F E D C B A      | |               time = 0
# > > F E D C B A  | |               time = 1
#     > > F E D C B|A|               time = 2
#         > > F E D|C|B A            time = 3
#                   ^
# parade_time(['A','B','C','D','E','F'], 3, 2,'C']) == [3]

def parade_time(groups, location, speed, pref):
    return [(location+i) // speed for i, n in enumerate(groups, 1) if n == pref]