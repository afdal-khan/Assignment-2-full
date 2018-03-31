class Movie{
constructor (){
    this.uuid = ""
    this.title = ""
    this.year = ""
    this.genre = ""
    this.related = []
}


addRelatedMovie(m){
    if(m instanceof Movie){ 
        this.related.push(m)
        return true
    }
    false
     }

     setGenre(g){
     if(g instanceof Genre)
     if(g.addMovie(this))
        return True
      return False
    return False
 } 

}


 

 class Genre{
   constructor (){
       this.name = ""
       this.movies = []
   }     
    addMovie(m){
        if(m instanceof Movie)
         this.movie.push(m)
           return true
        return false
    }
       
 }


 module.exports = {
     Movie:Movie,
     Genre:Genre
 }
