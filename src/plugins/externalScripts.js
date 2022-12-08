const src = ['./plugins/gsap.min.js','./plugins/ScrollSmoother.min.js','./plugins/ScrollTrigger.min.js']

const connectExternalScripts = function (){
    for(let i=src.length-1;i!=-1;i--){
      let recaptchaScript = document.createElement("script")
      recaptchaScript.setAttribute(
        "src",
        src[i]
      )
      recaptchaScript.setAttribute(
        "connected",
        "true"
      )
      document.head.appendChild(recaptchaScript)
    }
}

const unconnectExternalScripts = function(){
    let targets = document.querySelectorAll('[connected]')

    for(let target of targets){
     target.remove()
    }

}

export { connectExternalScripts,unconnectExternalScripts }