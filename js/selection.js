$('#select-button>button').on('click', function () {
    console.log(this.id)
    let btnid = this.id.substring(0, 2);
    console.log(btnid)
    for (i = 1; i < 99; i++){
        if (document.getElementById("0" + i) == null){
            break;
        }
        if (("0" + i) == btnid){
            document.getElementById(btnid).style.display = "inline"
            document.getElementById("1-" + btnid).style.display = "block"
            document.getElementById("2-" + btnid).style.display = "flex"
            document.getElementById("3-" + btnid).style.display = "block"   
            document.getElementById(this.id).disabled = true
        } else {
            document.getElementById("0" + i).style.display = "none"
            document.getElementById("1-" + "0" + i).style.display = "none"
            document.getElementById("2-" + "0" + i).style.display = "none"
            document.getElementById("3-" + "0" + i).style.display = "none"
            document.getElementById("0" + i + "-button").disabled = false
        }
    }
})