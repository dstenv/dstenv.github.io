let heartbox = document.querySelector('.heart')
var picbox = document.querySelectorAll(".heart div")

var picwidth = picbox[0].offsetWidth

let oldEle = null
heartbox.onmouseover = function (event) {
    console.log(getComputedStyle(event.target).backgroundImage);
    document.querySelector("body").style.backgroundImage = getComputedStyle(event.target).backgroundImage
    oldEle? oldEle.style.flex = 1:null
    event.target.style.flex = 4
    oldEle = event.target
}