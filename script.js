const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let selectedPriority="low";
document.getElementById("low").addEventListener("click",()=>{
    selectedPriority="low";
    addTask();
});
document.getElementById("mid").addEventListener("click",()=>{
    selectedPriority="mid";
    addTask();
});
document.getElementById("high").addEventListener("click",()=>{
    selectedPriority="high";
    addTask();
});
function addTask() {
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        li.classList.add(selectedPriority);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
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
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
    // let tasks = listContainer.querySelectorAll("li");
    // tasks.forEach(task=>{
    //     task.classList.remove("low","mid","high");
    //     if(task.textContent.includes("[Low]")){
    //         task.classList.add("low");
    //     }
    //     else if (task.textContent.includes("[Mid]")){
    //         task.classList.add("mid");
    //     }
    //     else if (task.contentEditable.includes("[High]")){
    //         task.classList.add("high");
    //     }
    // });
}
showTask();

 const icon = document.getElementById("icon");
 icon.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                icon.src = "Images/sun.png"; 
                saveData();
            } else {
                icon.src = "Images/moon.png"; // Path to your moon icon
                saveData();
            }
        });