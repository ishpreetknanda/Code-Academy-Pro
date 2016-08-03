from string import uppercase
playerOne = raw_input("Enter your choice- Rock, Paper and Scissors: ").upper()
print playerOne

playerTwo = raw_input("Enter your choice- Rock, Paper and Scissors: ").upper()
print playerTwo

if playerOne in ['ROCK','PAPER', 'SCISSORS']:
    if playerOne == "ROCK" and playerTwo == "SCISSORS":
         print "Player One wins! " + playerOne + "beats " + playerTwo 

    elif playerOne == "SCISSORS" and playerTwo == "PAPER":
        print "Player One wins! " + playerOne  + "beats " + playerTwo 
    
    elif playerOne == "PAPER" and playerTwo == "ROCK":
        print "Player One wins! " + playerOne + "beats " + playerTwo 
    
    else:
        print "Player Two wins! " + playerTwo + "beats " + playerOne 
else:
    print "Bad input. Try again"