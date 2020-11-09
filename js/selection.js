$('#select-button>button').on('click', function () {
    let btnid = this.id.substring(4, 6);
    for (i = 1; i < 99; i++){
        if (document.getElementById("new-0" + i) == null){
            break;
        }
        if (("0" + i) == btnid){
            document.getElementById("new-" + btnid).style.display = "inline"
            document.getElementById("new-1-" + btnid).style.display = "block"
            document.getElementById("new-2-" + btnid).style.display = "flex"
            document.getElementById("new-3-" + btnid).style.display = "block"   
            document.getElementById(this.id).disabled = true
        } else {
            document.getElementById("new-0" + i).style.display = "none"
            document.getElementById("new-1-" + "0" + i).style.display = "none"
            document.getElementById("new-2-" + "0" + i).style.display = "none"
            document.getElementById("new-3-" + "0" + i).style.display = "none"
            document.getElementById("new-0" + i + "-button").disabled = false
        }
    }
})