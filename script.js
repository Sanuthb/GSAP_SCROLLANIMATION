var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top 0%",
    end: "top -100%",
    markers: false,
    pin: true,
    scrub: 3,
  },
});

tl
    .to(".container", {
        transform: "translateX(-100%)",
        opacity: 0,
        duration:2,
    })

  .to(".box1", {
    top: "10%",
    duration: 2,
  })

  .to(".box2", {
    top: "20%",
    duration: 2,
  })

  .to(".box3", {
    top: "30%",
    duration: 2,
  })

  .to(".box4", {
    top: "40%",
    duration: 2,
  });
