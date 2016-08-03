import random
from _random import Random

randomNum = random.randint(1,9)
print "Random number is: " + str(randomNum)

userNum = str(0)
print "User entered number is: " + userNum

while( userNum!=randomNum):
    userNum = raw_input("Guess a number")
    print "UserNum is: " + userNum
    print "RandomNum is: " +  randomNum
    
    if(userNum>randomNum):
        print "Number didn't match. Number is too high"
    elif userNum<randomNum:
        print "Number didn't match. Number is too low"
    elif userNum == "exit":
        break
    else:
        print "Number match"