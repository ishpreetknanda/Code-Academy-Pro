num = int(input("Enter number to divide: "))

listRange = list(range(1,num+1))

divisorList = []

def div(a):
    for val in listRange:
        if a%val == 0:
            print "Divisible: " + str(a) + " by " + str(val)
        else:
            print "NOT Divisible: " + str(a) + " by " + str(val)
    

  
div(num)