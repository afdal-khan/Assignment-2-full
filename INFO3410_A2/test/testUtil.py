from py('util') import utilitiesCLASS
import unittest

# import sys
# sys.path.append('py')
# import util


class TestUtilitiesClass(unittest.TestCase):
    def test_GenerateEven(self):
       n=10
       Exp=[2,4,6,8]
       Actual= utilitiesCLASS.generateEven(n)

       self.assertEqual(Actual,Exp) 

    def test_getSize(self):
        words=["Ice","Cream", "is","life"]
        size=utilitiesCLASS.getSize(words)

        self.assertEqual(size,len(words))

    def test_AddTo(self):
        a1=["aquaman","batman","catwoman"]
        a2=["aquaman","batman","catwoman","deadpool"]
        result=utilitiesCLASS.addTo(a1,"deadpool","back")

        self.assertEqual(a2,result)

    def test_Enqueue(self):
        words=["Ice","Cream", "is","life"]
        ans=["Ice","Cream", "is","life","Yes Dawg!"]

        result=utilitiesCLASS.enqueue(words,"Yes Dawg!")
        self.assertEqual(result,ans)

    def test_dequeue(self):
        words=["Ice","Cream", "is","life."]
        ans=["Cream", "is","life."]

        result =utilitiesCLASS.dequeue(words)
        self.assertEqual(result,ans)

    def test_addToObj(self):
        Person={"Fname":"Peter","Lname":"Parker","SuperheroName":"SpiderMan"}
        exp={"Fname":"Peter","Lname":"Parker","SuperheroName":"SpiderMan","Age":"15"}

        newObjAddition=utilitiesCLASS.addToObj(Person,"Age","15")
        self.assertEqual(exp,newObjAddition)

    def test_sort(self):
       orig=["k","s","q","a","b"]
       exp=["a","b","k","q","s"]

       s=utilitiesCLASS.sort(orig,"asc")
       self.assertEqual(exp,s)

    def test_flatten(self):
        Person={"Fname":"Peter","Lname":"Parker","SuperheroName":"SpiderMan"}
        exp='{"Fname": "Peter", "Lname": "Parker", "SuperheroName": "SpiderMan"}'
        

        e=utilitiesCLASS.flatten(Person)
        self.assertEqual(exp,e)

if __name__ =='__main__':
    unittest.main()

    