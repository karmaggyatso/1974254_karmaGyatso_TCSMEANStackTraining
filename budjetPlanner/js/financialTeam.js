function retrieveFromSession() {

    console.log("another page");
    var obj = JSON.parse(sessionStorage.getItem("budjetData"));
    console.log(obj);
    insertDataToTable(obj);
}

function insertDataToTable (obj){
    console.log("from insertData");
    console.log(obj);
    var table = document.getElementById("budjetPlanner"); //grabbed form ID
    var body = table.getElementsByTagName("tbody")[0];


    // var newRow = body.insertRow(body.length);
    var newRow;
    var cell1, cell2, cell3;
    

    for (var i = 0; i<obj.length; i++){

        //number of rows based on object size
        newRow = body.insertRow(body.length);

        //creates new cell every loop
        cell1=newRow.insertCell(0);
        cell2=newRow.insertCell(1);
        cell3=newRow.insertCell(2);

        //fills the data in the cell based on value of the object key
        cell1.innerHTML=obj[i].clientName;
        cell2.innerHTML=obj[i].ProjectName;
        cell3.innerHTML=obj[i].budjet;

    }

    console.log("length of obj = " + obj.length);

}