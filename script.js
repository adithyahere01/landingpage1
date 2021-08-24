let tl = gsap.timeline();

tl.from('.gsap-title',{
    y: '100%',
    opacity: 0,
    duration: 1
})
tl.from('.gsap-p',{
    y: '-100%',
    opacity: 0,
    duration: 0.3
})
tl.from('.gsap-3',{
    y: '100%',
    opacity: 0,
    duration: 0.3
})
tl.from('.gsap-4',{
    y: '100%',
    opacity: 0,
    duration: 0.5
})
tl.from('.image-header',{
    x: '100%',
    opacity: 0,
    duration: 0.5
})
tl.from('.gsap-extra',{
    opacity: 0,
    duration: 0.5
})
tl.from('.link', {
    y: -100,
    opacity: 0,
    duration: 0.5
})


const bar = document.querySelector('.bars');
const cross = document.querySelector('.cross');
const links = document.querySelector('.links');
const login = document.querySelector('.login');
const navbar = document.querySelector('.navbar');

bar.addEventListener('click', function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
        login.classList.remove('show-links')
        navbar.classList.remove('show-navbar')
    }else{
        links.classList.add('show-links')
        login.classList.add('show-links')
        navbar.classList.add('show-navbar')
    }

    /*links.classList.toggle('show-links')*/
})


//animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.container-2', {
    scrollTrigger: {
        trigger: ".content-2"
    },
    y: "50%",
    opacity: 0,
    duration: 1.6
})

gsap.from(".animate-boxes",{
    scrollTrigger: {
        trigger: ".animate-boxes"
    },
    x: "-100%",
    opacity: 0,
    duration: 1.6
})
gsap.from(".animate-row",{
    scrollTrigger: {
        trigger: ".animate-row"
    },
    x: "100%",
    opacity: 0,
    duration: 1.6
})
gsap.from(".ani-row",{
    scrollTrigger: {
        trigger: ".ani-row"
    },
    x: "-100%",
    opacity: 0,
    duration: 1.6
})
gsap.from('.animate-card',{
    scrollTrigger: ".card-1",
    x: "100%",
    duration: 1,
    stagger: 1,
    delay: 0.2
})