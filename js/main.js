(function () {

    "use strict";
     var btn, ul, item;
    
    btn = document.querySelector("button");
    ul = document.querySelector("ul");

    function removeItem(ev){
       
        ul.removeChild(ev.target);
    }

    function addItem(){
        
        item = document.createElement("li");
        item.innerHTML = prompt("Enter a new item for to-do list:");
        
        
        if(item.innerHTML != "") {
            ul.appendChild(item); 
            item.addEventListener("click", removeItem);
        }
    }

    btn.addEventListener("click", addItem)

 }());