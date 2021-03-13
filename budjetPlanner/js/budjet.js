var budjetObj = []; 
var budjetString = JSON.stringify(budjetObj);


function retrieveFromSession() {
    var obj = sessionStorage.getItem("budjetInfo");

    return obj;
}

function onBackButton() {
    // sessionStorage.setItem("budjetInfo", budjetString); //storing in session Storage    console.log(budjetString);
    alert("successfull saved");
}


function onFormSubmit () {
    var data = readForm();
    budjetObj.push(data);

    sessionStorage.setItem("budjetInfo", budjetString); //storing in session Storage    console.log(budjetString);
    
    console.log(budjetString);
    
}

function readForm() {
    var obj = {}; 
    obj.clientName= document.getElementById("clientName").value;
    obj.ProjectName = document.getElementById("ProjectName").value;
    obj.budjet = document.getElementById("budjet").value;

    console.log(obj);

    return obj;
}


function insertDataToTable() {

    var retrieveFromSession = retrieveFromSession();
    var parseJson = JSON.parse(retrieveFromSession());

    console.log("from insertData");
    console.log(parseJson);


    var table = document.getElementById("budjetPlanner"); //grabbed form ID
    var body = table.getElementsByTagName("tbody")[0];


    var newRow = body.insertRow(body.length);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2); 

    cell1.innerHTML=parseJson.clientName;
    cell2.innerHTML=parseJson.ProjectName;
    cell3.innerHTML=parseJson.budjet;

}



