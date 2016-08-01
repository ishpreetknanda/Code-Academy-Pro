
import datetime

name = raw_input("Enter your name?") 
age =  raw_input("Enter your age?") 

def calc(name, age):
    now = datetime.datetime.now()
    print now.year
    year = (now.year - int(age))+100
    print name + " will be 100 years old in the year " + str(year)
    print "Hello %s, You will turn 100 years old in %s years" % (name, str(year))
calc(name, age)
    