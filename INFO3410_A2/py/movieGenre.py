class Movie():
    def __init__(self):
        self.uuid = ''
        self.title = ''
        self.year = ''
        self.genres = Genre()
        self.related = []


    def addRelatedMovie(self,m):
        if(isinstance(m,Movie)):
            self.related.append(m) 
            return True
        return False

    def setGenre(self,g):
        if(isinstance(g,Genre)):
            if(g.addMovie(self)):
                return True
            return False
        return False 

            
                




class Genre():
    def __init__(self):
        self.name = ''
        self.movies = []
        
    def addMovie(self, m):
        if(isinstance(m,Movie)):
            self.movies.append(m)
            return True
        return False

