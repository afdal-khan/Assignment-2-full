
let firstNames = [];
let lastNames = [];

function retrieveData(){
    const url = "data/names.json";
    console.log("Attempting to retrieve data from: " + url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Received data");
            let data = JSON.parse(xhttp.responseText); // convert data to JSON
            //console.log("Received %s records", data.length);
            let dataString = JSON.stringify(data);
            let myData = JSON.parse(dataString);
            firstNames = myData['firstNames'];
            lastNames = myData['lastnames'];

        //     let firstNames2 = myData['firstNames'];
        //     let lastnames2 = myData['lastnames'];

        //     console.log(firstNmes);
        //     console.log(lastnames);

        //    names =  merge2Single(firstNmes,lastnames);
        //    console.log(names);

           
            
        //     words =  merge2Object(firstNames2,lastnames2);
        //    console.log(words);

        //    console.log(names);

         
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function callmerge2single(){
    let mynames =  merge2Single(firstNames,lastNames);
    console.log(mynames)
    let tableBody=document.getElementById("list");
    
    let tableString = buildTableFromData(mynames);
    tableBody.innerHTML += tableString;
}

function callmerge2object(){
        let words = merge2Object(firstNames,lastNames);
      let tableBody1=document.getElementById("list2");
        let tableString1 = buildTableFromObject(words);
           tableBody1.innerHTML += tableString1;
            

}

 function setupButtons(){
    document.getElementById("merge2single").addEventListener("click", evt => {
        console.log("button clicked");
        callmerge2single();
    });
    document.getElementById("merge2object").addEventListener("click", evt=>{
        console.log("button clicked");
        callmerge2object();
    });
}


retrieveData();
setupButtons();