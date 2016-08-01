userNum = int(raw_input("Enter number to validate if its even or odd: "))
def calc(userNum):
    if userNum % 2 == 0:
        if userNum%4==0:
            print "Number is Even and divisible by 4: " + str(userNum)
        else:
            print "Number is Even but not divisible by 4 : " + str(userNum)
    else:
        print "Number is Odd: " + str(userNum)
        
calc(userNum)

num = int(input("Enter number to be checked: "))
check = int(input("Enter check number: "))

def checkNum(num,check):
    if num % check==0:
        print "Number is divisible by check: " + str(num)
    else:
        print "Number is NOT divisible by check: " + str(check)

checkNum(num, check)