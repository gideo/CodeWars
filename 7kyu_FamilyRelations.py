# 7kyu - Family Relations

# This kata provides you with a list of parent-child pairs family_list, and from this family description you'll need to find the relationship between two members(what is the relation of latter with former) which is given as target_pair.

# For example, the family list may be given as:

# [('Enid', 'Susan'), ('Susan', 'Deborah'), ('Enid', 'Dianne')]

# This describes the family:

#       Enid
#         |
#    |---------|
#  Susan     Dianne
#    |
# Deborah
# The relationship pair ('Deborah', 'Enid') should return 'Grandmother' as Enid is Deborah's Grandmother.

# This family tree can cover up to 3 generations, with varying numbers of children for each parent. We only focus on the females in the family, and so children will have only one parent.

# The possible responses are Mother, Daughter, Grandmother, Granddaughter, Sister, Cousin, Aunt, Niece (each matching their 'real life' equivalents). There will always be a valid answer.

# Enjoy, and be nice to your Mother!

def relations(family_list, target_pair):
    parents = {}
    for parent, child in family_list:
        parents[child] = parent
    a, b = target_pair
    ap = parents.get(a)
    app = parents.get(ap)
    bp = parents.get(b)
    bpp = parents.get(bp)
    if b == ap:
        return 'Mother'
    if b == app:
        return 'Grandmother'
    if a == bp:
        return 'Daughter'
    if a == bpp:
        return 'Granddaughter'
    if ap == bp:
        return 'Sister'
    if app == bpp:
        return 'Cousin'
    if app == bp:
        return 'Aunt'
    if ap == bpp:
        return 'Niece'
