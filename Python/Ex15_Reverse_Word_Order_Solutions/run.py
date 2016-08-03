s = "My name is Michele"


def reverseWord(w):
    print w
    reverse = w.split()[::-1]
    print ' '.join(reverse)
  
reverseWord(s)