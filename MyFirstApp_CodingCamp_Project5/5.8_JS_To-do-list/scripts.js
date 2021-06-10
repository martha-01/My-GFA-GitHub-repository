let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");

let num = 0;
addBtn.addEventListener("click", function(){
    let newItem = document.querySelector("#new-item");
    let li = document.createElement("li");
    li.innerHTML = "<span id='new_element"+num+"'>" + newItem.value + "</span><span><img id='check_mark"+num+"' src='tick.svg' alt='check-mark'><img id='delete_icon"+num+"' src='delete_icon.svg' alt='Delete Icon'></span>";
    list.appendChild(li);
    newItem.value = "";
    newItem.focus();
    let check_mark = document.querySelector("#check_mark"+num);
    let delete_icon = document.querySelector("#delete_icon"+num);
    let newElement = document.querySelector("#new_element"+num);
    num++;

    check_mark.addEventListener("click", function(){
        newElement.style.opacity = "0.5";
        newElement.style.textDecoration = "line-through";
        this.style.background = "green";
    })

    delete_icon.addEventListener("click", function(){
        this.parentElement.parentElement.remove();
    })
});