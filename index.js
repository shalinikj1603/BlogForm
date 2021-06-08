var count = 1;
var text = "textxt";
var myObj = [];
localStorage.setItem("data", JSON.stringify(myObj));

function some() {
    //text = text + 'heloo';
    //console.log(text);
    //var divTag = document.getElementById("main");
    //divTag.innerHTML = text;
    //divTag.appendChild(text);

    myObj = [{ name: 'shalini', age: 25, gender: 'female' }]
    localStorage.setItem("data", JSON.stringify(myObj));
    var data = JSON.parse(localStorage.getItem("data"));
    myDiv = `<div><h1>${data.name}</h1><h2>${data.age}</h2><h2>${data.gender}</h2></div>`
    document.getElementById("main").innerHTML = myDiv
}

function addData() {
    // Add the contents
    var name = document.getElementById("name").value;
    var textarea = document.getElementById("textarea").value;
    var myObj = { name: name, text: textarea }
    var data = JSON.parse(localStorage.getItem("data"));
    data.push(myObj);
    localStorage.setItem("data", JSON.stringify(data));

    var divTag = document.getElementById("main");

    var empTag = document.createElement("p");
    const lineBreak = document.createElement('br');


    var empTagname = document.createTextNode("Author Name:" + name)
    var empTagContent = document.createTextNode("Content:" + textarea)
    empTag.appendChild(empTagname);
    empTag.appendChild(lineBreak);
    empTag.appendChild(empTagContent);
    divTag.appendChild(empTag);


    //style
    empTag.setAttribute("class", "myClass");


    //Reset the page
    reset();

    //Delete the content
    empTag.setAttribute("id", count);
    var deleteNode = document.createElement("a");
    const deleteBreak = document.createElement('br');
    var deleteNodeValue = document.createTextNode("Remove");
    deleteNode.appendChild(deleteBreak);
    deleteNode.appendChild(deleteNodeValue);
    deleteNode.setAttribute("href", "#");
    deleteNode.setAttribute("onclick", "deleteTag(" + count + ")");
    empTag.appendChild(deleteNode);
    count++;

}

function reset() {
    document.getElementById("name").value = ""
    document.getElementById("textarea").value = ""
}

function deleteTag(idValue) {
    console.log("Event fired..." + idValue)
    var obj = document.getElementById(idValue);
    obj.remove();
}