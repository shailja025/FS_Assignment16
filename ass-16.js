var button = document.querySelector(".button");
var todolist = document.querySelector(".todolist");
var listinput = document.querySelector(".input");
button.onclick = addfunc;
todolist.onclick = btnEvent;

function addfunc(e) {
    e.preventDefault();
    var newdiv = document.createElement("div");
    newdiv.classList.add("todo");
    var newli = document.createElement("todo-item");
    newli.classList.add("todo-item");
    newli.innerHTML = listinput.value;
    newdiv.appendChild(newli);

    var checkbtn = document.createElement("btn");
    checkbtn.classList.add("check-btn")
    checkbtn.innerHTML = '<i class="fa fa-check"></i>'
    newdiv.appendChild(checkbtn);

    var deletebtn = document.createElement("btn");
    deletebtn.classList.add("delete-btn")
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>'
    newdiv.appendChild(deletebtn);


    todolist.appendChild(newdiv);

}

function btnEvent(e) {
    var item = e.target;
    if (item.classList[0] == "delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    }

    if (item.classList[0] == "check-btn") {
        var parent = item.parentNode;
        parent.classList.toggle("done");
    }
}