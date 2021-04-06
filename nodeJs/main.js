let fs = require("fs");
let date = new Date();
var obj = require("readline-sync") //accepts input through command line


const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync("userInfo.json");
        const DataJSON = dataBuffer.toString();
        debugger;
        console.log(JSON.parse(DataJSON));
        return JSON.parse(DataJSON);
    } catch (e) {
        return [];
    }
};


const addUser = user => {
    const users = loadUsers().userInfo; //users is initalized with userInfo array
    users.push(user); //all the parameter, user, passed in the function will be pushed in the existing array of userInfo
    saveUsers(users); //calls saveUser function
};

const saveUsers = (users) => {
    //converts "users" to JSON string 
    const DataJSON = JSON.stringify({
            "userInfo": users
        }

        , null, 2);
    fs.writeFileSync("userInfo.json", DataJSON); //writes to JSON file
};


const addNewEntry = inputUser => {
    //accepts the user input in the command line and stores as an obj in TEMPOBJ and passed it to addUser(obj)
    for (let i = 0; i < inputUser; i++) {
        let id = obj.question("Enter the id ");

        let name = obj.question("Enter the name ");
        let salary = obj.question("Enter the salary ");

        var tempObj = {
            "id": id,
            "name": name,
            "salary": salary,
            "data": date.toDateString() //prints the current date into string format
        }
        debugger;
        addUser(tempObj);
    }
}

module.exports = {
    addNewEntry: addNewEntry,
    loadUsers: loadUsers,
}