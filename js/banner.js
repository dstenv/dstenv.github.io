let oindex
let index = 1


let left = document.querySelector('.left')
let right = document.querySelector('.right')
let banner = document.querySelector('.banner')
let navLis = document.querySelectorAll('.nav li')
console.log(navLis[0]);
navLis[0].style.backgroundColor = 'rgba(200, 22, 35,.8)'
leftLong = banner.querySelectorAll('li')[0].offsetWidth
liLength = banner.querySelectorAll('li').length
transitionTime = 500
banner.style.left = -leftLong*index + 'px'
setTimeout(() => {
    banner.style.transition = `all ${parseFloat(transitionTime/1000)}s linear 0s`
}, 4);
let timer

function Autochange() {
    timer = setInterval(() => {
        navLis[index - 1].style.backgroundColor = 'rgba(255,255,255,.5)'
        index++
        banner.style.left = -leftLong*index + 'px'
        if(index === liLength - 1){
            index = 1
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
            setTimeout(() => {
                banner.style.transition = 'none'
                banner.style.left = banner.style.left = -leftLong*index + 'px'
                setTimeout(() => {
                    banner.style.transition = `all ${parseFloat(transitionTime/1000)}s linear 0s`
                }, transitionTime);
            },transitionTime)
        }else{
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
        }
    }, 2000);
}
Autochange()


left.onclick = function () {
    clickRun('left')
}
right.onclick = function () {
    clickRun('right')
}

function clickRun(direction) {
    clearInterval(timer)
    if(direction === 'left'){
        navLis[index - 1].style.backgroundColor = 'rgba(255,255,255,.5)'
        index--
        banner.style.left = -leftLong*index + 'px'
        if(index === 0){
            console.log('该到最后一张了');
            left.style.pointerEvents = 'none'
            index = liLength - 2
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
            setTimeout(() => {
                banner.style.transition = 'none'
                banner.style.left = banner.style.left = -leftLong*index + 'px'
                setTimeout(() => {
                    banner.style.transition = `all ${parseFloat(transitionTime/1000)}s linear 0s`
                    left.style.pointerEvents = 'auto'
                    Autochange()
                }, transitionTime);
            },transitionTime)
        }else{
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
            Autochange()
        }
    }else{
        navLis[index - 1].style.backgroundColor = 'rgba(255,255,255,.5)'
        index++
        banner.style.left = -leftLong*index + 'px'
        if(index === liLength - 1){
            console.log('该到第一张了');
            right.style.pointerEvents = 'none'
            index = 1
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
            setTimeout(() => {
                banner.style.transition = 'none'
                banner.style.left = banner.style.left = -leftLong*index + 'px'
                setTimeout(() => {
                    banner.style.transition = `all ${parseFloat(transitionTime/1000)}s linear 0s`
                    right.style.pointerEvents = 'auto'
                    Autochange()
                }, transitionTime);
            },transitionTime)
        }else{
            navLis[index - 1].style.backgroundColor = 'rgba(200, 22, 35,.8)'
            Autochange()
        }
    }
}

for(let i = 0; i < navLis.length; i++){
    navLis[i].onclick = function () {
        clearInterval(timer)
        console.log(i);
        navLis[index - 1].style.backgroundColor = 'rgba(255,255,255,.5)'
        index = i + 1
        navLis[i].style.backgroundColor = 'rgba(200, 22, 35,.8)'
        banner.style.left = banner.style.left = -leftLong*index + 'px'
        Autochange()
    }
}




