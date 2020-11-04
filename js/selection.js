$('#select-button>button').on('click', function () {
    if (this.id == "2dshape") {
        document.getElementById("3dshape-selected").style.display = "none"
        document.getElementById("units-selected").style.display = "none"
        document.getElementById("3dshape").disabled = false
        document.getElementById("units").disabled = false
    } else if (this.id == "3dshape") {
        document.getElementById("2dshape-selected").style.display = "none"
        document.getElementById("units-selected").style.display = "none"
        document.getElementById("units").disabled = false
        document.getElementById("2dshape").disabled = false
    } else if (this.id == "units") {
        document.getElementById("2dshape-selected").style.display = "none"
        document.getElementById("3dshape-selected").style.display = "none"
        document.getElementById("3dshape").disabled = false
        document.getElementById("2dshape").disabled = false

    }
    document.getElementById(this.id + "-selected").style.display = "inline"
    document.getElementById(this.id).disabled = true
});