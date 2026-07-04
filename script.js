function checkBP() {

  let sys = Number(document.getElementById("sys").value);
  let dia = Number(document.getElementById("dia").value);

  let result = "";

  if (sys >= 140 || dia >= 90) {
    result = "High Blood Pressure";
  }
  else if (sys < 90) {
    result = "Low Blood Pressure";
  }
  else {
    result = "Normal Blood Pressure";
  }

  document.getElementById("result").innerText = result;
}
