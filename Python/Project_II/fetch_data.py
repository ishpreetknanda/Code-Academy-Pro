import urllib2

response = urllib2.urlopen('http://gutenberg.org/')

html = response.read()

count = 0

text_words = html.split(' ')

for word in text_words:
	if word == 'Project':
		count+=1
print count

