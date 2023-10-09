const inputBox = document.getElementById("input-box");
const list  = document.getElementById("list");

function addTask(){
    if(inputBox.value===''){
        alert("Please write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();