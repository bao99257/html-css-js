const panels = document.querySelectorAll(".panel");
panels.forEach(item=>{
    console.log(item);
    item.addEventListener("click",()=>{
        removeActive();
        item.classList.add("active")
    })
    
})
function removeActive(){
    panels.forEach((item)=>{
        item.classList.remove("active")
    })
}
