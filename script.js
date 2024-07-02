function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page1',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl1.to("#page1>h1", {
    top: '-50%',
});

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl3.to("#page3>#center-page3", {
    top: '-50%',
});

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page5',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl5.to("#page5>#center-page5", {
    top: '-50%',
});


var tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page7',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl7.to("#page7>#center-page7", {
    top: '-50%',
});

var tl9 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page9',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl9.to("#page9>#center-page9", {
    top: '-50%',
});

var tl11 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page11',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl11.to("#page11>#center-page11", {
    top: '-50%',
});

var tl13 = gsap.timeline({
    scrollTrigger:{
        trigger:'#page13',
        start:'top top',
        scrub:1,
        scroller:'#main',
        pin:true
    } 
}) 

tl13.to("#page13>#center-page13", {
    top: '-50%',
});
