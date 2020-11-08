const bmi = document.getElementById("3-03-01")
const bmiText = document.getElementById("3-03-02")
const ageGroups = [[15, 29], [30, 44], [45, 59], [60, 100]]
const bmiGroups = [18.5,25,30]

document.getElementById("2-03-05").addEventListener('input', function () {
    document.getElementById("2-03-06").innerText = "Selected age: " + this.value
})

$('.03>button').on('click', function () {
    selected = this.id
    if (this.id == "03-01") {
        for (i = 1; i < 7; i++){
            document.getElementById("2-03-0" + i).disabled = false
        }
    }
    bmi.innerText = "Your BMI is: x"
    bmiText.innerText = "You are: x"
})

function bodyType(person, BMI){
    let bmiGenderTolerance = (person.gender == 1) ? 0.5 : 0
    let group = ageGroup(person.age)
    let bmiAgeTolerance = group / 3
    if (((BMI - bmiAgeTolerance - bmiGenderTolerance - 15) > 1) && ((BMI - bmiAgeTolerance - bmiGenderTolerance) < 32))
    document.getElementById("pointer").style.paddingLeft = `${((BMI - bmiAgeTolerance - bmiGenderTolerance)- 15) * 5.5555}%`
    if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[2]) return "obese"
    else if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[1]) return "overweight"
    else if (BMI - bmiAgeTolerance - bmiGenderTolerance > bmiGroups[0]) return "normal weight"
    else return "underweight"
}

function personData(){
    let person = {
        height: document.getElementById("2-03-01").value,
        weight: document.getElementById("2-03-02").value,
        gender: $("input[name='gender']:checked")[0].value,
        age: document.getElementById("2-03-05").value
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