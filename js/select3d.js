let selected3d = "";

$('.3d>button').on('click', function () {
    let arr = ["-a", "-b", "-c", "-n", "-mir", "-mar", "-h", "-ha"]
    document.getElementById("preview").src = "img/shapes/" + this.id + ".png"
    for (i = 0; i < arr.length; i++) {
        document.getElementById("3d" + arr[i]).disabled = true
    }
    selected3d = this.id
    if (this.id == "cube") {
        document.getElementById("3d-a").disabled = false
    } else if (this.id == "cuboid") {
        document.getElementById("3d-a").disabled = false
        document.getElementById("3d-b").disabled = false
        document.getElementById("3d-c").disabled = false
    } else if (this.id == "prism") {
        document.getElementById("3d-a").disabled = false
        document.getElementById("3d-h").disabled = false
        document.getElementById("3d-ha").disabled = false
        document.getElementById("3d-n").disabled = false
    } else if (this.id == "sphere") {
        document.getElementById("3d-mir").disabled = false
    } else if (this.id == "cylinder") {
        document.getElementById("3d-mir").disabled = false
        document.getElementById("3d-h").disabled = false
    } else if (this.id == "torus") {
        document.getElementById("3d-mir").disabled = false
        document.getElementById("3d-mar").disabled = false
    }
})

// document.getElementById("3d-").value

const surf = document.getElementById("surf")
const volu = document.getElementById("volu")

$('.forms').on('input', function () {
    if (selected3d == "cube") {
        surf.innerText = `Surface: ${6 * Math.pow(document.getElementById("3d-a").value, 2)}`
        volu.innerText = `Volume: ${Math.pow(document.getElementById("3d-a").value, 3)}`
    } else if (selected3d == "cuboid") {
        surf.innerText = `Surface: ${2 * (parseFloat(document.getElementById("3d-a").value * document.getElementById("3d-b").value) + parseFloat(document.getElementById("3d-b").value * document.getElementById("3d-c").value) + parseFloat(document.getElementById("3d-c").value * document.getElementById("3d-a").value))}`
        volu.innerText = `Volume: ${document.getElementById("3d-a").value * document.getElementById("3d-b").value * document.getElementById("3d-c").value}`
    } else if (selected3d == "prism") {
        surf.innerText = `Surface: ${(((document.getElementById("3d-n").value / 2) * document.getElementById("3d-a").value * document.getElementById("3d-ha").value) * 2) + (document.getElementById("3d-a").value * document.getElementById("3d-h").value * document.getElementById("3d-n").value)}`
        volu.innerText = `Volume: ${((document.getElementById("3d-n").value / 2) * document.getElementById("3d-a").value * document.getElementById("3d-ha").value) * document.getElementById("3d-h").value}`
    } else if (selected3d == "sphere") {
        surf.innerText = `Surface: ${4 * Math.PI * document.getElementById("3d-mir").value}`
        volu.innerText = `Volume: ${(4 / 3) * Math.PI * Math.pow(document.getElementById("3d-mir").value, 3)}`
    } else if (selected3d == "cylinder") {
        surf.innerText = `Surface: ${(2 * Math.PI * document.getElementById("3d-mir").value * document.getElementById("3d-h").value) + (2 * Math.PI * Math.pow(document.getElementById("3d-mir").value, 2))}`
        volu.innerText = `Volume: ${Math.PI * Math.pow(document.getElementById("3d-mir").value, 2) * document.getElementById("3d-h").value}`
    } else if (selected3d == "torus") {
        surf.innerText = `Surface: Can't be calculated`
        volu.innerText = `Volume: ${(Math.PI * Math.pow(document.getElementById("3d-mir").value), 2) * (2 * Math.PI * document.getElementById("3d-mar").value)}`
    }
})