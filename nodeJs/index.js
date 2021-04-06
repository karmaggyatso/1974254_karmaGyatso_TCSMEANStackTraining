const user = require('./main');


var obj = require("readline-sync") //accepts input through command line


let option = obj.question("press 1 to save new user entry and 2 to load user details in console. ");

let size;


switch (parseInt(option)) {
    case 1:
        size = obj.question("How many data would like to record? ");
        user.addNewEntry(size);
        break;

    case 2:
        user.loadUsers();

    default:
        console.log("Sorry Invalid entry. please try again.")
        break;
}