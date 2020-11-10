document.getElementById("new-2-03-05").addEventListener('input', function () {
    document.getElementById("new-2-03-06").innerText = "Selected age: " + this.value
})

$('.new-03>button').on('click', function () {
    selected = this.id
    if (this.id == "new-03-01") {
        for (i = 1; i < 7; i++){
            document.getElementById("new-2-03-0" + i).disabled = false
        }
    }
    bmi.innerText = "Your BMI is: x"
    bmiText.innerText = "You are: x"
})

function bodyType(person, BMI){
    let bmiGenderTolerance = (person.gender == "woman") ? 0.25 : 0
    let bmiAgeTolerance = ageGroup(person.age) / 3
    let finalbmi = (BMI - bmiAgeTolerance - bmiGenderTolerance)
    if (((finalbmi - 15) > 1) && ((finalbmi) < 32))
    document.getElementById("pointer").style.paddingLeft = `${((finalbmi)- 15) * 5.5555 * 0.8}%`
    let text = fnc_text(finalbmi)
    let prefix = fnc_prefix(text, finalbmi)
    let age = fnc_age(person.age)
    return `<br>${age} ${prefix} ${(typeof text == "string") ? text : text[0]} ${person.gender}`
}

function fnc_age(age){
    if (age > 80){
        return "Old"
    } else if (age < 20){
        return "Young"
    }
    return ""
}

function fnc_text(BMI){
    if (BMI > bmiGroups[2]) return [`obese`, 2]
    else if (BMI > bmiGroups[1]) return [`overweight`, 1]
    else if (BMI > bmiGroups[0]) return "normal weight"
    else return [`underweight`, 0]
}

function fnc_prefix(text, BMI){
    if (text[1] != 0){
        if ((BMI - bmiGroups[text[1]]) > 4) return "morbidly"
        else if ((BMI - bmiGroups[text[1]]) < 2) return "slightly"
    } else {
        if ((BMI - bmiGroups[text[1]]) < -4) return "greatly"
        else if ((BMI - bmiGroups[text[1]]) < -2) return ""
        else if ((BMI - bmiGroups[text[1]]) < 0) return "slightly"
    }
    return ""
}

function personData(){
    let person = {
        height: document.getElementById("new-2-03-01").value,
        weight: document.getElementById("new-2-03-02").value,
        gender: $("input[name='gender']:checked")[0].value,
        age: document.getElementById("new-2-03-05").value
    }
    return person
}

function ageGroup(age){
    for (i=0; i<4; i++){
        if (age >= ageGroups[i][0] && age <= ageGroups[i][1]){
            return i
        }
    }
}