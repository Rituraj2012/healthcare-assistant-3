function calculateBMI() {

  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value) / 100;

  let bmi = weight / (height * height);

  let result = "";

  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi < 25) {
    result = "Normal Weight";
  } else if (bmi < 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }

  document.getElementById("bmiResult").innerText =
    "BMI: " + bmi.toFixed(1) + " (" + result + ")";
}
