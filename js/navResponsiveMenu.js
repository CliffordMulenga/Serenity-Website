const openBtn = document.querySelector('.navMenu')
const closeBtn = document.querySelector('.navClose')
const navContent = document.querySelector('.mobileNavBarContent')
const navItem = document.querySelector('.navItem')

// navContent.style.transition = "right 2s ease"
openBtn.addEventListener('click', () => {
    navContent.style.right = "0"
})

closeBtn.addEventListener('click', () => {
    navContent.style.right = "-100%"
})

navItem.addEventListener('click', () => {
    navContent.style.right = "-100%"
    alert('clicked')
})

// Close nav menu if click anywhere else on screen

document.addEventListener('click', (e) => {
    if(!openBtn.contains(e.target) && !navContent.contains(e.target)){
    navContent.style.right = "-100%"

    }
})