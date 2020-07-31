console.log("Script loded")

// Javascript code simple
function add_item(){
    let list = document.getElementById("list_items");
    let btn = document.getElementsByTagName("button");
    let item_curr = document.getElementById("item_val");
    var node = document.createElement("LI");
    node.className = "list-group-item";
    var textnode = document.createTextNode(item_curr.value);
    node.appendChild(textnode);
    list.appendChild(node);
}

// Jquery code
$(document).ready(() => {
    let list = document.getElementById("list_items");
    let item_curr = document.getElementById("item_val");
    
    $("#add_btn").click(function(){
        var node = document.createElement("LI");
        node.className = "list-group-item";
        var textnode = document.createTextNode(item_curr.value);
        node.appendChild(textnode);
        list.appendChild(node);
    }); 

})