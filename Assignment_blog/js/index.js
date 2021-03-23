var blogObj = [];

function sessionInStorage() {
    sessionStorage.setItem("blogStroage", JSON.stringify(blogObj));
}

function retrieveSession() {
    var obj = JSON.parse(sessionStorage.getItem("blogStroage"));
    console.log("retrieve session");
    console.log(obj)

    displayBlog(obj);
}

function onSubmitButton() {
    var blogData = readMeData();
    blogObj.push(blogData);

    sessionInStorage();
    retrieveSession();

    resetSession();

    console.log("onSubmitButton was clicked");
    console.log(blogObj);
}

function readMeData() {

    imageFile = document.getElementById("uploadImage").files[0];
    var inputData = {};

    inputData.title = document.getElementById("title").value;
    inputData.article = document.getElementById("article").value;
    // inputData.
    image = document.getElementById("uploadImage").src;

    console.log("Testing image path")
    console.log(inputData.image);

    return inputData;
}

function displayBlog(obj) {
    var parentDiv = document.getElementById("viewBlog");
    var addBlog = document.getElementById("uploadImage");
    for (var i = 0; i < obj.length; i++) {
        var h1Element = document.createElement("h1");
        var paraElement = document.createElement("p");
        var imgElement = document.createElement("img");

        h1Element.innerHTML = obj[i].title;
        paraElement.innerHTML = obj[i].article;
        imgElement.src = obj[i].image;

        addBlog.addEventListener("click", () => {
            i = 0;
            parentDiv.innerHTML = "";
            console.log("add blog was clicked");
        });

        parentDiv.appendChild(h1Element);
        parentDiv.appendChild(paraElement);
        parentDiv.appendChild(imgElement);
    }

}

function uploadImageFun() {
    //attemp to read the image file and display in the page
    //but it is not working
    document.querySelector("#uploadImage").addEventListener("change", () => {
        console.log("from UploadImageFuns");

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            console.log("from UploadImageFuns");
            console.log(read.result);
        })
        reader.readAsDataURL(this.files[0]);
    })

}

function resetSession() {
    document.getElementById("title").value = "";
    document.getElementById("article").value = "";
    document.getElementById("uploadImage").value = "";
}