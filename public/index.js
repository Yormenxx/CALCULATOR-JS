const $btn_1 = document.getElementById("btn_1");
const $btn_2 = document.getElementById("btn_2");
const $btn_3 = document.getElementById("btn_3");
const body = document.body
const $container__head = document.querySelector(".container__head")
const $textfield = document.querySelector(".textfield")
const $equal = document.getElementById("equal")

$btn_2.addEventListener("click",()=>{

    body.style.backgroundColor= "hsl(0, 0%, 90%)"
    $container__head.style.color="black"
    $textfield.style.backgroundColor="hsl(0, 0%, 93%)"
    $textfield.style.color="hsl(60, 10%, 19%)"
    $equal.style.backgroundColor="hsl(25, 98%, 40%)"

})



$btn_1.addEventListener("click",()=>{

    body.style.backgroundColor= "hsl(222, 26%, 31%)"
    $container__head.style.color="white"
    $textfield.style.backgroundColor="hsl(224, 36%, 15%)"
    $textfield.style.color="white"
    $equal.style.backgroundColor="hsl(6, 63%, 50%)"

})



$btn_3.addEventListener("click",()=>{

    body.style.backgroundColor= "hsl(268, 75%, 9%)"
    $container__head.style.color="hsl(52, 100%, 62%)"
    $textfield.style.backgroundColor="hsl(268, 71%, 12%)"
    $textfield.style.color="hsl(52, 100%, 62%)"
    $equal.style.backgroundColor="hsl(177, 92%, 70%)"

})