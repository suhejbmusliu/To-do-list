document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    let button = document.getElementById("add-button");

    function addListItem() {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.className = "close";
            li.appendChild(span);

            span.onclick = function() {
                li.remove();
            };

         
            li.onclick = function() {
                li.classList.toggle("checked");
            };
        }
        inputBox.value = "";
    }

    button.onclick = addListItem;


    inputBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addListItem();
        }
    });
});






