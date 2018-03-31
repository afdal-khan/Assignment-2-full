function buildTableFromData(data){
    let str = "";
    str += "";
    for (let i=0; i <data.length; i ++){
        str += "<li>" + data[i] + "</li>"
    }
    return str;
}


function buildTableFromObject(data){
    let str = "";
    str += "";
    for (let i=0; i <data.length; i ++){
        str += "<li> Firstname: " + data[i].firstname+" LastName:" + data[i].lastname+ "</li>"
    }
    return str;
}
