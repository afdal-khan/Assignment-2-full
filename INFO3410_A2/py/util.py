import json

class utilitiesCLASS:
    def generateEven(n):
       EvenA=[]

       for i in range(1,n):
           if i%2==0:
               EvenA.append(i)
       return EvenA

    def getSize(ListOrDict):
        count=0

        for pos in ListOrDict:
            count=count+1
        return count

    def addTo(list,num,position):
        if position=="front":
            list.insert(0,num) # .insert puts the number in the front of the list array

        elif position=="back":
            list.append(num) #adds number to the end of the list array

        else :
            raise ValueError("Invalid Keyword entered. Your value will not be added.")

        return list

    def enqueue(list,val):
        list.append(val) #adds number to the end of the list array
        return list

    def dequeue(list):
        list.pop(0)
        return list

    def addToObj(dict,index, val):
        dict[index]=val
        return dict

    def sort(list,sortype):
        if sortype=="asc":
            list.sort()
            
        elif sortype=="desc":
            list.sort()
            list.reverse()

        else :
            raise ValueError("Invalid Keyword entered. Your value will not be sorted.")
        return list
    
    def flatten(dict):
        
        FlatStr =json.dumps(dict)

        # for atr,val in dict.items(): #Traverse the dictionary object
        #     FlatStr= FlatStr+atr+":"+val+"," #pull the attribute name and its respective Values  &add to string variable
        
        print (FlatStr)
        return FlatStr


# Person={"Fname":"Peter","Lname":"Parker","SuperheroName":"SpiderMan"}
# utilitiesCLASS.flatten(Person)

    
