$('.forms').on('input', function () {
    if (selected.substring(4, 6) == "01") {
        let shape = shapeData()
        circ.innerText = `Circumference: ${shape[0].toFixed(2)}`
        area.innerText = `Area: ${shape[1].toFixed(2)}`
    } else if (selected.substring(4, 6) == "02") {
        let shape = shapeData3d()
        surf.innerText = `Surface: ${shape[0].toFixed(2)}`
        volu.innerText = `Volume: ${shape[1].toFixed(2)}`
    } else if (selected.substring(4, 6) == "03") {
        if (selected == "new-03-01") {
            let person = personData()
            let yourBMI = person.weight / Math.pow((person.height / 100), 2)
            if (person.gender != undefined) {
                bmi.innerText = `Your BMI is: ${yourBMI.toFixed(2)}`
                bmiText.innerHTML = `<p>You are: ${bodyType(person, yourBMI)}</p>`
            }
        }
    }
})