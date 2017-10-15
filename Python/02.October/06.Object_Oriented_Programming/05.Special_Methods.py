class Book(object):

    def __init__(self, title, author, pages):
        print('Book has been created')
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Title: {title}, Author: {author}, Pages: {pages}".format(title=self.title, author=self.author, pages=self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        return "A book is gone"

b = Book('Python', 'Ever', 621)
print(b)
print('length: ' + str(len(b)))

print(b.title)
del b 
print(b.title)













