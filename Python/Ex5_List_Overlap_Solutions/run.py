a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

list = []

print a
print b
for val in a and b:
    if val in b:
        if val in a and b:
            list.append(val)
            print "Skip as already exists" + str(val)
        else:
            print "a exists in b: " + str(val)
    else:
        print "a does NOT exists in b: " + str(val)
print(list)
