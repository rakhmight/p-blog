const parallaxPlugin = function (){
    window.addEventListener('scroll', (e)=>{
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    // setTimeout(() => {
    //     gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    //     ScrollSmoother.create({
    //         wrapper: '.wrapper',
    //         content: '.home'
    //     })
    // }, 1000)
}

export default parallaxPlugin