const circ = document.getElementById("3-01-01")
const area = document.getElementById("3-01-02")

$('.01>button').on('click', function () {
    selected = this.id
    document.getElementById("1-01-01").src = "img/shapes/" + this.id + ".png"
    for (i = 1; i < 9; i++) {
        document.getElementById("2-01-0" + i).disabled = true
    }
    if (this.id == "01-01") {
        document.getElementById("2-01-01").disabled = false
    } else if (this.id == "01-02") {
        document.getElementById("2-01-01").disabled = false
        document.getElementById("2-01-02").disabled = false
    } else if (this.id == "01-03") {
        document.getElementById("2-01-01").disabled = false
        document.getElementById("2-01-02").disabled = false
        document.getElementById("2-01-03").disabled = false
        document.getElementById("2-01-05").disabled = false
    } else if (this.id == "01-04") {
        document.getElementById("2-01-06").disabled = false
    } else if (this.id == "01-05") {
        document.getElementById("2-01-06").disabled = false
        document.getElementById("2-01-07").disabled = false
    } else if (this.id == "01-06") {
        document.getElementById("2-01-01").disabled = false
        document.getElementById("2-01-05").disabled = false
        document.getElementById("2-01-08").disabled = false
    } else if (this.id == "01-07") {
        document.getElementById("2-01-01").disabled = false
        document.getElementById("2-01-02").disabled = false
        document.getElementById("2-01-05").disabled = false
    } else if (this.id == "01-08") {
        document.getElementById("2-01-01").disabled = false
        document.getElementById("2-01-02").disabled = false
        document.getElementById("2-01-03").disabled = false
        document.getElementById("2-01-04").disabled = false
        document.getElementById("2-01-05").disabled = false
    }
    circ.innerText = "Circumference: x"
    area.innerText = "Area: x"
})

// mohlo by se dat: $('.' + btnid + '>button')
// hadam ze by to mohlo fungovat na nejakych listech idk

