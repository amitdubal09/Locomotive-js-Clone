let Nav = document.querySelector("nav ul");
let navLinks = document.querySelectorAll("nav ul li a");
let navItems = document.querySelectorAll("nav ul li");


gsap.from(Nav, {
    opacity: 0, x: 1
})
function Animation() {

    window.addEventListener("scroll", () => {

        if (window.scrollY < 750 || window.scrollY > 2600) {

            Nav.style.backgroundColor = "#202DED";

            navLinks.forEach(link => {
                link.style.color = "#ffffff";
            });

            navItems.forEach(item => {
                item.style.color = "#ffffff";
            });

        } else {

            Nav.style.backgroundColor = "#ffffff";

            navLinks.forEach(link => {
                link.style.color = "#202DED";
            });

            navItems.forEach(item => {
                item.style.color = "#202DED";
            });

        }
    });
}
Animation()

let tl = gsap.timeline();

tl.from('.section-2 span, #span', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});

gsap.to("#para", {
    color: "white",
    scrollTrigger: {
        trigger: "#para",
        start: "top 90%",
        end: "top 30%",
        scrub: true,
    }
});

gsap.from(".utility", {
    opacity: 0,
    x: 1
})
gsap.from("#version", {
    opacity: 0,
    y: 10,
})

gsap.to(".slider h1", {
    x: -500,
    scrollTrigger: {
        trigger: ".slider",
        start: "top bottom",
        end: "top 50%",
        scrub: 1
    }
});
gsap.from(".row", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.row',
        start: 'top 80%',
        end: 'top 30%'
    }
})
gsap.to("#down", {
    color: "#202DED",
    scrollTrigger: {
        trigger: "#down",
        start: "top 90%",
        end: "top 10%",
        scrub: true,
    }
});

gsap.from('#list span', {
    y: -100,
    opacity: 0,
    stagger: {
        each: 0.15
    },
    ease: "power3.out",

    scrollTrigger: {
        trigger: '#list',
        start: 'top 80%',
        end: 'top 0%',
        scrub: true,
    }
})

function CircleAnimation() {

    gsap.from("#sone", {
        scale: 0,
        rotation: -360,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 90%",
            end: "top 75%",
            scrub: 3
        }
    })

    gsap.from("#stwo", {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 75%",
            end: "top 60%",
            scrub: 3
        }
    })

    gsap.from("#sthree", {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 60%",
            end: "top 45%",
            scrub: 3
        }
    })

    gsap.from("#sfour", {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 45%",
            end: "top 30%",
            scrub: 3
        }
    })

    gsap.from("#sfive", {
        scale: 0,
        rotation: 360,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 30%",
            end: "top 15%",
            scrub: 3
        }
    })

    gsap.from("#ssix", {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-anime",
            start: "top 15%",
            end: "top 0%",
            scrub: 3
        }
    })

}
CircleAnimation()