from py.merger import*




first_names = ["aaron","tom","brock","gyallis","rick"]
last_names = ["rodgers","brady","lesnar","banton","ross"]

# merge2Single Test Cases
print(' merge2Single Test Cases ')
def testmerge2single(arr1, arr2, ans):
    res = merge2Single(arr1, arr2)
    if res == ans:
        print("YES!!!!!!!")
    else:
      print('no:(')
testmerge2single(first_names, last_names,  ['aaron rodgers','tom brady','brock lesnar','gyallis banton','rick ross'])


print(' merge2object ')
def testmerge2Object(arr1, arr2, ans):
    res = merge2Object(arr1, arr2)
    if res == ans:
        print("YES!!!!!!!!!!!!")
    else:
      print('NO:(')
testmerge2Object(first_names, last_names, [{'firstname':'aaron','lastname':'rodgers'},{'firstname':'tom','lastname':'brady'},
{'firstname':'brock','lastname':'lesnar'},{ 'firstname':'gyallis','lastname':'banton'},{'firstname':'rick','lastname':'ross'}])


