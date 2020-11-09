const bmi = document.getElementById("new-3-03-01")
const bmiText = document.getElementById("new-3-03-02")
const ageGroups = [[15, 29], [30, 44], [45, 59], [60, 100]]
const bmiGroups = [18.5,25,30]

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
    let bmiGenderTolerance = (person.gender == 1) ? 0.25 : 0
    let bmiAgeTolerance = ageGroup(person.age) / 3
    if (((BMI - bmiAgeTolerance - bmiGenderTolerance - 15) > 1) && ((BMI - bmiAgeTolerance - bmiGenderTolerance) < 32))
    document.getElementById("pointer").style.paddingLeft = `${((BMI - bmiAgeTolerance - bmiGenderTolerance)- 15) * 5.5555 * 0.8}%`
    let text = fnc_text(BMI, bmiAgeTolerance, bmiGenderTolerance)
    let prefix = fnc_prefix(text, BMI, bmiAgeTolerance, bmiGenderTolerance)
    return `${prefix} ${(typeof text == "string") ? text : text[0]}`
}

function fnc_text(BMI, bmiAgeTolerance, bmiGenderTolerance){
    if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[2]) return [`obese`, 2]
    else if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[1]) return [`overweight`, 1]
    else if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[0]) return "normal weight"
    else return [`underweight`, 0]
}

function fnc_prefix(text, BMI, bmiAgeTolerance, bmiGenderTolerance){
    if (text[1] != 0){
        if ((BMI - bmiAgeTolerance - bmiGenderTolerance - bmiGroups[text[1]]) > 4) return "morbidly"
        else if ((BMI - bmiAgeTolerance - bmiGenderTolerance - bmiGroups[text[1]]) < 2) return "slightly"
    } else {
        if ((BMI - bmiAgeTolerance - bmiGenderTolerance - bmiGroups[text[1]]) < -4) return "greatly"
        else if ((BMI - bmiAgeTolerance - bmiGenderTolerance - bmiGroups[text[1]]) < -2) return ""
        else if ((BMI - bmiAgeTolerance - bmiGenderTolerance - bmiGroups[text[1]]) < 0) return "slightly"
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