a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
num = int(input("Enter number to compare with: "))
myList = []

def cal(list,num):
    for val in list:
        if val<num:
            myList.append(val)
    print myList

  
cal(a,num)