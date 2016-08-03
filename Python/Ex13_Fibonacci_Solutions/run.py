from itertools import count
count = raw_input("Enter the count: ")

def fib(number):
    i=1
    fibi = [1]
    if i < count:
        fibi.append(i)
        i+=1
        print count
        print i
    print fibi
     
    
fib(count)
    