let bars = document.querySelector(".bars");
let closebtn = document.querySelector(".close");
let list = document.querySelector(".list");
bars.onclick = function(){
    list.style.display = "block";
    bars.style.display = "none";
    closebtn.style.display = "block";
};
closebtn.onclick = function(){
    list.style.display = "none";
    bars.style.display = "block";
    closebtn.style.display = "none";
};