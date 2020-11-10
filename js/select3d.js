$('.new-02>button').on('click', function () {
    selected = this.id
    document.getElementById("new-1-02-01").src = "img/shapes/" + (this.id).slice(-5) + ".png"
    for (i = 1; i < 9; i++) {
        document.getElementById("new-2-02-0" + i).disabled = true
    }
    if (this.id == "new-02-01") {
        document.getElementById("new-2-02-01").disabled = false
    } else if (this.id == "new-02-02") {
        document.getElementById("new-2-02-01").disabled = false
        document.getElementById("new-2-02-02").disabled = false
        document.getElementById("new-2-02-03").disabled = false
    } else if (this.id == "new-02-03") {
        document.getElementById("new-2-02-01").disabled = false
        document.getElementById("new-2-02-04").disabled = false
        document.getElementById("new-2-02-07").disabled = false
        document.getElementById("new-2-02-08").disabled = false
    } else if (this.id == "new-02-04") {
        document.getElementById("new-2-02-05").disabled = false
    } else if (this.id == "new-02-05") {
        document.getElementById("new-2-02-05").disabled = false
        document.getElementById("new-2-02-07").disabled = false
    } else if (this.id == "new-02-06") {
        document.getElementById("new-2-02-05").disabled = false
        document.getElementById("new-2-02-06").disabled = false
    }
    surf.innerText = "Surface: x"
    volu.innerText = "Volume: x"
})

function shapeData3d() {
    let shape = {
        a: parseFloat(document.getElementById("new-2-02-01").value),
        b: parseFloat(document.getElementById("new-2-02-02").value),
        c: parseFloat(document.getElementById("new-2-02-03").value),
        n: parseFloat(document.getElementById("new-2-02-04").value),
        r: parseFloat(document.getElementById("new-2-02-05").value),
        R: parseFloat(document.getElementById("new-2-02-06").value),
        h: parseFloat(document.getElementById("new-2-02-07").value),
        ha: parseFloat(document.getElementById("new-2-02-08").value)
    }
    return shapeCalculate3d(shape)
}

function shapeCalculate3d(shape) {
    if (selected == "new-02-01") return [(6 * Math.pow(shape.a, 2)), (Math.pow(shape.a, 3))]
    else if (selected == "new-02-02") return [(2 * ((shape.a * shape.b) + (shape.b * shape.c) + (shape.c * shape.a))), (shape.a * shape.b * shape.c)]
    else if (selected == "new-02-03") return [((shape.n * shape.a * shape.ha) + (shape.a * shape.h * shape.n)), (((shape.n / 2) * shape.a * shape.ha) * shape.h)]
    else if (selected == "new-02-04") return [(4 * Math.PI * Math.pow(shape.r, 2)), ((4 / 3) * Math.PI * Math.pow(shape.r, 3))]
    else if (selected == "new-02-05") return [((2 * Math.PI * shape.r * shape.h) + (2 * Math.PI * Math.pow(shape.r, 2))), (Math.PI * Math.pow(shape.r, 2) * shape.h)]
    else if (selected == "new-02-06") return [((2 * Math.PI * shape.R) * (2 * Math.PI * shape.r)), ((Math.PI * Math.pow(shape.r), 2) * (2 * Math.PI * shape.R))]
}
