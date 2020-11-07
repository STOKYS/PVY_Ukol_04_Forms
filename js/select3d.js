const surf = document.getElementById("4-02-01")
const volu = document.getElementById("4-02-02")

$('.02>button').on('click', function () {
    selected = this.id
    document.getElementById("preview").src = "img/shapes/" + this.id + ".png"
    for (i = 1; i < 5; i++) {
        document.getElementById("2-02-0" + i).disabled = true
        document.getElementById("3-02-0" + i).disabled = true
    }
    if (this.id == "02-01") {
        document.getElementById("2-02-01").disabled = false
    } else if (this.id == "02-02") {
        document.getElementById("2-02-01").disabled = false
        document.getElementById("2-02-02").disabled = false
        document.getElementById("2-02-03").disabled = false
    } else if (this.id == "02-03") {
        document.getElementById("2-02-01").disabled = false
        document.getElementById("3-02-03").disabled = false
        document.getElementById("3-02-04").disabled = false
        document.getElementById("2-02-04").disabled = false
    } else if (this.id == "02-04") {
        document.getElementById("3-02-01").disabled = false
    } else if (this.id == "02-05") {
        document.getElementById("3-02-01").disabled = false
        document.getElementById("3-02-03").disabled = false
    } else if (this.id == "02-06") {
        document.getElementById("3-02-01").disabled = false
        document.getElementById("3-02-02").disabled = false
    }
    surf.innerText = "Surface: x"
    volu.innerText = "Volume: x"
})