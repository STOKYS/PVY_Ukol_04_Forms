$('.forms').on('input', function () {
    if (selected.substring(0, 2) == "01") {
        if (selected == "01-01") {
            circ.innerText = `Circumference: ${(4 * document.getElementById("2-01-01").value).toFixed(2)}`
            area.innerText = `Area: ${(Math.pow(document.getElementById("2-01-01").value, 2)).toFixed(2)}`
        } else if (selected == "01-02") {
            circ.innerText = `Circumference: ${(2 * (parseFloat(document.getElementById("2-01-01").value) + parseFloat(document.getElementById("2-01-02").value))).toFixed(2)}`
            area.innerText = `Area: ${(document.getElementById("2-01-01").value * document.getElementById("2-01-02").value).toFixed(2)}`
        } else if (selected == "01-03") {
            circ.innerText = `Circumference: ${(parseFloat(document.getElementById("2-01-01").value) + parseFloat(document.getElementById("2-01-02").value) + parseFloat(document.getElementById("2-01-03").value)).toFixed(2)}`
            area.innerText = `Area: ${((document.getElementById("2-01-01").value * document.getElementById("3-01-01").value) / 2).toFixed(2)}`
        } else if (selected == "01-04") {
            circ.innerText = `Circumference: ${(2 * Math.PI * document.getElementById("3-01-02").value).toFixed(2)}`
            area.innerText = `Area: ${(Math.PI * Math.pow(document.getElementById("3-01-02").value, 2)).toFixed(2)}`
        } else if (selected == "01-05") {
            circ.innerText = `Circumference: Can't be calculated`
            area.innerText = `Area: ${(Math.PI * document.getElementById("3-01-02").value * document.getElementById("3-01-03").value).toFixed(2)}`
        } else if (selected == "01-06") {
            circ.innerText = `Circumference: ${(document.getElementById("3-01-04").value * document.getElementById("2-01-01").value).toFixed(2)}`
            area.innerText = `Area: ${((document.getElementById("3-01-04").value / 2) * document.getElementById("2-01-01").value * document.getElementById("3-01-01").value).toFixed(2)}`
        } else if (selected == "01-07") {
            circ.innerText = `Circumference: ${2 * ((parseFloat(document.getElementById("2-01-01").value) + parseFloat(document.getElementById("2-01-02").value))).toFixed(2)}`
            area.innerText = `Area: ${(document.getElementById("2-01-01").value * document.getElementById("3-01-01").value).toFixed(2)}`
        } else if (selected == "01-08") {
            circ.innerText = `Circumference: ${(parseFloat(document.getElementById("2-01-01").value) + parseFloat(document.getElementById("2-01-02").value) + parseFloat(document.getElementById("2-01-03").value) + parseFloat(document.getElementById("2-01-04").value)).toFixed(2)}`
            area.innerText = `Area: ${(((parseFloat(document.getElementById("2-01-01").value) + parseFloat(document.getElementById("2-01-02").value)) / 2) * document.getElementById("3-01-01").value).toFixed(2)}`
        }
    } else if (selected.substring(0, 2) == "02") {
        if (selected == "02-01") {
            surf.innerText = `Surface: ${6 * Math.pow(document.getElementById("2-02-01").value, 2)}`
            volu.innerText = `Volume: ${Math.pow(document.getElementById("2-02-01").value, 3)}`
        } else if (selected == "02-02") {
            surf.innerText = `Surface: ${2 * (parseFloat(document.getElementById("2-02-01").value * document.getElementById("2-02-02").value) + parseFloat(document.getElementById("2-02-02").value * document.getElementById("2-02-03").value) + parseFloat(document.getElementById("2-02-03").value * document.getElementById("2-02-01").value))}`
            volu.innerText = `Volume: ${document.getElementById("2-02-01").value * document.getElementById("2-02-02").value * document.getElementById("2-02-03").value}`
        } else if (selected == "02-03") {
            surf.innerText = `Surface: ${(((document.getElementById("2-02-04").value / 2) * document.getElementById("2-02-01").value * document.getElementById("3-02-04").value) * 2) + (document.getElementById("2-02-01").value * document.getElementById("3-02-03").value * document.getElementById("2-02-04").value)}`
            volu.innerText = `Volume: ${((document.getElementById("2-02-04").value / 2) * document.getElementById("2-02-01").value * document.getElementById("3-02-04").value) * document.getElementById("3-02-03").value}`
        } else if (selected == "02-04") {
            surf.innerText = `Surface: ${4 * Math.PI * document.getElementById("3-02-01").value}`
            volu.innerText = `Volume: ${(4 / 3) * Math.PI * Math.pow(document.getElementById("3-02-01").value, 3)}`
        } else if (selected == "02-05") {
            surf.innerText = `Surface: ${(2 * Math.PI * document.getElementById("3-02-01").value * document.getElementById("3-02-03").value) + (2 * Math.PI * Math.pow(document.getElementById("3-02-01").value, 2))}`
            volu.innerText = `Volume: ${Math.PI * Math.pow(document.getElementById("3-02-01").value, 2) * document.getElementById("3-02-03").value}`
        } else if (selected == "02-06") {
            surf.innerText = `Surface: Can't be calculated`
            volu.innerText = `Volume: ${(Math.PI * Math.pow(document.getElementById("3-02-01").value), 2) * (2 * Math.PI * document.getElementById("3-02-02").value)}`
        }
    } else if (selected.substring(0, 2) == "03") {
        if (selected == "03-01") {
            let person = personData()
            console.log(person.gender + " " + person.age)
            let yourBMI = person.weight / Math.pow((person.height / 100), 2)
            if (person.gender != undefined) {
                bmi.innerText = `Your BMI is: ${yourBMI.toFixed(2)}`
                bmiText.innerText = `You are: ${bodyType(person, yourBMI)}`
            }
        }
    }
})