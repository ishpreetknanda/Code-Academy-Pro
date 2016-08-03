inputString = raw_input("Enter String: ")
reverseInputString = inputString[::-1]

print inputString
print reverseInputString

if inputString == reverseInputString:
    print "It's a palindrome"
else: 
    print "It is NOT a palindrome"
