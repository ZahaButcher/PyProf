document.addEventListener("DOMContentLoaded",()=>{
    let butClick = document.querySelector("#butClick");
    let txt = document.querySelector("#txt");

    butClick.addEventListener("click", ()=>{
        txt.textContent = "Test";
        alert("asd");
    });
});