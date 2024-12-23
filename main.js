let btn1 = document.querySelector("button#btn1")
let btn2=document.querySelector("button#btn2")
let body=document.querySelector("body")
let modal=document.querySelector("div.modal")

let display =()=>{
    modal.classList.add("display")
    body.classList.add("body")
}
let normal =()=>{
body.classList.remove("body")
modal.classList.remove("display")
}
btn1.addEventListener("click",display)
btn2.addEventListener("click",normal)