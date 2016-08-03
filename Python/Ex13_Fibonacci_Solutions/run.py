def fib():
    Fibi=[1,1]
    count = input("Enter count: ")
    for i in range(1,count):
        Fibi.append(Fibi[i-1]+Fibi[i])
        i +=1
    print Fibi
fib()
    