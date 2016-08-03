List = [9,7,1,8,2,3,4,5,6,6,7,8,8,8,9]

NewList = []

def function(inputList):
    inputList.sort()    
    
    for val in inputList:
        if val not in NewList:
            NewList.append(val)
    print NewList
    
def dedupe_v2(x):
    print list(set(x))
    return list(set(x))

function(List)
dedupe_v2(List)