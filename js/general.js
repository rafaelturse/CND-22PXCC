let deadline = new Date("2023-12-01").getTime()

let countdown = setInterval(function() {
    let now = new Date().getTime()
    let eta = deadline - now

    let days = Math.floor(eta / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
    let hours = Math.floor((eta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
    let minutes = Math.floor((eta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
    let seconds = Math.floor((eta % (1000 * 60)) / 1000).toString().padStart(2, '0')

    document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S"

    if (eta < 0) {
        clearInterval(countdown)
        document.getElementById("countdown").innerHTML = "VALENDO!!!"
    }
}, 1000)
