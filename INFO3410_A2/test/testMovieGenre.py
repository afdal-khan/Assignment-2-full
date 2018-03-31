
# # darkWorld = Movie()
# # darkWorld.title = "Dark World"
# # print(thor.addRelatedMovie(darkWorld))
# # print(thor.related[0].title)


from movieGenre import *

Batman = Movie()
Batman.uuid = '01'
Batman.title = 'dark night'
Batman.year = 2010


superman = Movie()
superman.uuid = 'S01'
superman. title = 'Superman'
superman.year = 2015


hero = Genre()
hero.name = 'hero'

action = Genre()
action.name = 'Action'

fantasy = Genre()
fantasy.name = 'Fantasy'


print('Add Related Movie')
def test_addRelated(a, b):
    if (a.addRelatedMovie(b) == True):
        print('true')
    else:
        print('false')
test_addRelated(Batman, superman); 



print('\n setGenre ')
def test_setGenre(m, g):
    if (m.setGenre(g) == True):
        m.genres = g.name
        print('True')
    else:
        print('TEST FAILED')
test_setGenre(Batman, action); # test case
test_setGenre(superman, hero); 


# addMovie Test Cases
print('\n addMovie ')
def test_addMovie(g, m):
    if (g.addMovie(m) == True):
        print('True')
    else:
        print('False')
test_addMovie(action, Batman); # test case
test_addMovie(hero, superman); 


# display movies
# print('\n', thor)
# print('\n', avengers)
# print('\n', spiderman)

# display genres
# print('\n', fantasy)
# print('\n', hero)
# print('\n', action)
        