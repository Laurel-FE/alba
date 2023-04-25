const scrollupbtn = document.querySelector("#scrollupbtn");
    
scrollupbtn.addEventListener("click", function () {
       
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})
