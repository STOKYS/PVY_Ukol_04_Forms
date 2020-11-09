const circ = document.getElementById("new-3-01-01")
const area = document.getElementById("new-3-01-02")

$('.new-01>button').on('click', function () {
    selected = this.id
    document.getElementById("new-1-01-01").src = "img/shapes/" + (this.id).slice(-5) + ".png"
    for (i = 1; i < 9; i++) {
        document.getElementById("new-2-01-0" + i).disabled = true
    }
    if (this.id == "new-01-01") {
        document.getElementById("new-2-01-01").disabled = false
    } else if (this.id == "new-01-02") {
        document.getElementById("new-2-01-01").disabled = false
        document.getElementById("new-2-01-02").disabled = false
    } else if (this.id == "new-01-03") {
        document.getElementById("new-2-01-01").disabled = false
        document.getElementById("new-2-01-02").disabled = false
        document.getElementById("new-2-01-03").disabled = false
        document.getElementById("new-2-01-05").disabled = false
    } else if (this.id == "new-01-04") {
        document.getElementById("new-2-01-06").disabled = false
    } else if (this.id == "new-01-05") {
        document.getElementById("new-2-01-06").disabled = false
        document.getElementById("new-2-01-07").disabled = false
    } else if (this.id == "new-01-06") {
        document.getElementById("new-2-01-01").disabled = false
        document.getElementById("new-2-01-05").disabled = false
        document.getElementById("new-2-01-08").disabled = false
    } else if (this.id == "new-01-07") {
        document.getElementById("new-2-01-01").disabled = false
        document.getElementById("new-2-01-02").disabled = false
        document.getElementById("new-2-01-05").disabled = false
    } else if (this.id == "new-01-08") {
        document.getElementById("new-2-01-01").disabled = false
        document.getElementById("new-2-01-02").disabled = false
        document.getElementById("new-2-01-03").disabled = false
        document.getElementById("new-2-01-04").disabled = false
        document.getElementById("new-2-01-05").disabled = false
    }
    circ.innerText = "Circumference: x"
    area.innerText = "Area: x"
})

function shapeData(){
    let shape = {
        a: document.getElementById("new-2-01-01").value,
        b: document.getElementById("new-2-01-02").value,
        c: document.getElementById("new-2-01-03").value,
        d: document.getElementById("new-2-01-04").value,
        h: document.getElementById("new-2-01-05").value,
        ra: document.getElementById("new-2-01-06").value,
        rb: document.getElementById("new-2-01-07").value,
        n: document.getElementById("new-2-01-08").value
    }
    return shapeCalculate(shape)
}

function shapeCalculate(object){
    if (selected == "new-01-01") return [(4 * object.a), (Math.pow(object.a, 2))]
    else if (selected == "new-01-02") return [(2 * (object.a + object.b)), (object.a * object.b)]
    else if (selected == "new-01-03") return [(object.a + object.b + object.c),(object.a * object.h / 2)]
    else if (selected == "new-01-04") return [(2 * Math.PI * object.ra),(Math.PI * Math.pow(object.ra, 2))]
    else if (selected == "new-01-05") return ["Can\'t be calculated", (Math.PI * object.ra * object.rb)]
    else if (selected == "new-01-06") return [(object.n * object.a), ((object.n / 2) * object.a * object.h)]
    else if (selected == "new-01-07") return [(2 * (object.a + object.b)),(object.a * object.h)]
    else if (selected == "new-01-08") return [(object.a + object.b + object.c + object.d), (((object.a + object.b) / 2) * object.h)]
}

