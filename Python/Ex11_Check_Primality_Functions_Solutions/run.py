userInput = raw_input("Enter number: ")
userInput = int(userInput)

value = [val for val in range(2,userInput) if userInput%val ==0]
print range(2,userInput)

if len(value) > 0:
    print "It is a prime number"
else:
    print "Not a prime number"
    
    
    