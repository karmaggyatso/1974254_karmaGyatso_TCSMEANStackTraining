var budjetObj = []; 


function storeInSession() {
    sessionStorage.setItem("budjetData", JSON.stringify(budjetObj));
}

function retrieveFromSession() {

    console.log("another page");
    var obj = JSON.parse(sessionStorage.getItem("budjetData"));
    console.log(obj);
}


function onFormSubmit () {
    var data = readForm();

    budjetObj.push(data);
    resetForm();
    console.log("form submitted");
    console.log(budjetObj);
}

function readForm() {
    var inputReceived = {}; 
    inputReceived.clientName= document.getElementById("clientName").value;
    inputReceived.ProjectName = document.getElementById("ProjectName").value;
    inputReceived.budjet = document.getElementById("budjet").value;

    console.log("from readForm");
    console.log(inputReceived);

    return inputReceived;
}


function resetForm() {
    document.getElementById("clientName").value="";
    document.getElementById("ProjectName").value="";  
    document.getElementById("budjet").value="";  

}