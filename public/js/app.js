let arrowBtn = document.querySelectorAll("#arrowBtn")
let form = document.querySelectorAll("#form")


arrowBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        form[index].classList.toggle('!grid')
    })
})

let box = document.querySelectorAll('#activeBox')
box.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box.forEach(function (item, index) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})



let box2 = document.querySelectorAll('#activeBox2')
box2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box2.forEach(function (item, index) {
            item.classList.remove('active2')
        })
        item.classList.add('active2')
    })
})

let box3 = document.querySelectorAll('#activeBox3')
box3.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box3.forEach(function (item, index) {
            item.classList.remove('active3')
        })
        item.classList.add('active3')
    })
})
let resMenu = document.querySelector('#responsive-menu')
let hamMenu = document.querySelector('#hamburger-menu')
let closeMenu = document.querySelector('#close-menu')
let body = document.querySelector('body')

hamMenu.addEventListener('click', function () {
    resMenu.classList.add("left-0")
    body.classList.add('overflow-hidden')
    resMenu.classList.remove("-left-full")
})
closeMenu.addEventListener('click', function () {
    resMenu.classList.add("-left-full")
    resMenu.classList.remove("left-0")
    body.classList.remove('overflow-hidden')

})