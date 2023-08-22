const btn = document.getElementById("buttonText");

btn.addEventListener("click",function(){
    const texto = document.getElementById("inputText").value;
    localStorage.setItem("nombre",texto)
})


