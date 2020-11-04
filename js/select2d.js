let selected2d = "";

$('.2d>button').on('click', function () {
    let arr = ["-a", "-b", "-c", "-d", "-h", "-n", "-ra", "-rb"]
    document.getElementById("preview").src = "img/shapes/" + this.id + ".png"
    for (i = 0; i < arr.length; i++) {
        document.getElementById("2d" + arr[i]).disabled = true
    }
    selected2d = this.id
    if (this.id == "square") {
        document.getElementById("2d-a").disabled = false
    } else if (this.id == "rectangle") {
        document.getElementById("2d-a").disabled = false
        document.getElementById("2d-b").disabled = false
    } else if (this.id == "triangle") {
        document.getElementById("2d-a").disabled = false
        document.getElementById("2d-b").disabled = false
        document.getElementById("2d-c").disabled = false
        document.getElementById("2d-h").disabled = false
    } else if (this.id == "circle") {
        document.getElementById("2d-ra").disabled = false
    } else if (this.id == "elipse") {
        document.getElementById("2d-ra").disabled = false
        document.getElementById("2d-rb").disabled = false
    } else if (this.id == "polygon") {
        document.getElementById("2d-a").disabled = false
        document.getElementById("2d-n").disabled = false
        document.getElementById("2d-h").disabled = false
    } else if (this.id == "parallelogram") {
        document.getElementById("2d-a").disabled = false
        document.getElementById("2d-b").disabled = false
        document.getElementById("2d-h").disabled = false
    } else if (this.id == "trapezoid") {
        document.getElementById("2d-a").disabled = false
        document.getElementById("2d-b").disabled = false
        document.getElementById("2d-c").disabled = false
        document.getElementById("2d-d").disabled = false
        document.getElementById("2d-h").disabled = false
    }
})

// document.getElementById("2d-").value

const circ = document.getElementById("circ")
const area = document.getElementById("area")

$('.forms').on('input', function () {
    if (selected2d == "square") {
        circ.innerText = `Circumference: ${4 * document.getElementById("2d-a").value}`
        area.innerText = `Area: ${Math.pow(document.getElementById("2d-a").value, 2)}`
    } else if (selected2d == "rectangle") {
        circ.innerText = `Circumference: ${2 * (parseFloat(document.getElementById("2d-a").value) + parseFloat(document.getElementById("2d-b").value))}`
        area.innerText = `Area: ${document.getElementById("2d-a").value * document.getElementById("2d-b").value}`
    } else if (selected2d == "triangle") {
        circ.innerText = `Circumference: ${parseFloat(document.getElementById("2d-a").value) + parseFloat(document.getElementById("2d-b").value) + parseFloat(document.getElementById("2d-c").value)}`
        area.innerText = `Area: ${(document.getElementById("2d-a").value * document.getElementById("2d-h").value) / 2}`
    } else if (selected2d == "circle") {
        circ.innerText = `Circumference: ${2 * Math.PI * document.getElementById("2d-ra").value}`
        area.innerText = `Area: ${Math.PI * Math.pow(document.getElementById("2d-ra").value, 2)}`
    } else if (selected2d == "elipse") {
        circ.innerText = `Circumference: Can't be calculated`
        area.innerText = `Area: ${Math.PI * document.getElementById("2d-ra").value * document.getElementById("2d-rb").value}`
    } else if (selected2d == "polygon") {
        circ.innerText = `Circumference: ${document.getElementById("2d-n").value * document.getElementById("2d-a").value}`
        area.innerText = `Area: ${(document.getElementById("2d-n").value / 2) * document.getElementById("2d-a").value * document.getElementById("2d-h").value}`
    } else if (selected2d == "parallelogram") {
        circ.innerText = `Circumference: ${2 * (parseFloat(document.getElementById("2d-a").value) + parseFloat(document.getElementById("2d-b").value))}`
        area.innerText = `Area: ${document.getElementById("2d-a").value * document.getElementById("2d-h").value}`
    } else if (selected2d == "trapezoid") {
        circ.innerText = `Circumference: ${parseFloat(document.getElementById("2d-a").value) + parseFloat(document.getElementById("2d-b").value) + parseFloat(document.getElementById("2d-c").value) + parseFloat(document.getElementById("2d-d").value)}`
        area.innerText = `Area: ${((parseFloat(document.getElementById("2d-a").value) + parseFloat(document.getElementById("2d-b").value)) / 2) * document.getElementById("2d-h").value}`
    }
})