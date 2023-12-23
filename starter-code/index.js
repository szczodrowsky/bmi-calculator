const radioContainer = document.getElementById("bmi-options");
const starterMetric = document.getElementById("metricBtn");

///Setting Metric as default//
document.addEventListener("DOMContentLoaded", () => {
  if (starterMetric) {
    starterMetric.checked = true;
  }
});

//Radio Buttons switch ///
radioContainer.addEventListener("change", (e) => {
  const metrical = document.getElementById("metrical");
  const imperial = document.getElementById("imperial");
  const metricBtn = document.getElementsByName("metric");
  const imperBtn = document.getElementsByName("imper");
  console.log(e.target.type);
  if (e.target.name === "metric") {
    metrical.classList.remove("hide");
    imperial.classList.add("hide");
    imperBtn[0].checked = false;
  } else if (e.target.name === "imper") {
    metrical.classList.add("hide");
    imperial.classList.remove("hide");
    metricBtn[0].checked = false;
  }
});

///Metric BMI calc ///
const heightValue = document.getElementById("heightIn");
const weightValue = document.getElementById("weightIn");
const bmiRange = document.getElementById("range-bmi");
const resultHeading = document.getElementById("resultName");
const score = document.getElementById("result-score");
const resultDescribe = document.getElementById("result-describe");

metrical.addEventListener("input", (e) => {
  if (isNaN(e.target.value) || e.target.value <= 0) {
    score.textContent = " ";
    resultHeading.textContent = "Welcome";
    resultDescribe.textContent =
      "Enter your height and weight and you’ll see your BMI result here";
  } else {
    let BMI =
      (weightValue.value / (heightValue.value * heightValue.value)) * 10000;
    let bmiCategory = "";
    if (BMI < 18.5) {
      bmiCategory = "Underweight";
    } else if (BMI < 25) {
      bmiCategory = "Normal Weight";
    } else if (BMI < 30) {
      bmiCategory = "Overweight";
    } else if (BMI < 35) {
      bmiCategory = "Obesity Class I (Overweight)";
    } else if (BMI < 40) {
      bmiCategory = "Obesity Class II (Severe Overweight)";
    } else {
      bmiCategory = "Obesity Class III (Very Severe or Morbid Obesity)";
    }
    score.textContent = parseFloat(BMI.toFixed(2));
    resultHeading.textContent = "Your BMI is...";
    resultDescribe.textContent = ` Your BMI suggests you’ re  ${bmiCategory}.`;
  }
});
const imperial = document.getElementById("imperial");
const heightFT = document.getElementById("heightFT");
const heightIN = document.getElementById("heightIN");
const heightST = document.getElementById("heightST");
const heightLBS = document.getElementById("heightLBS");

imperial.addEventListener("input", (e) => {
  if (
    isNaN(heightST.value) ||
    isNaN(heightLBS.value) ||
    heightST.value <= 0 ||
    heightLBS.value <= 0
  ) {
    score.textContent = " ";
    resultHeading.textContent = "Welcome";
    resultDescribe.textContent =
      "Enter your height and weight and you’ll see your BMI result here";
  } else {
    const totalInches = heightST.value * 12 + parseInt(heightIN.value);
    const BMI = (heightLBS.value / (totalInches * totalInches)) * 703;

    let bmiCategory = "";
    if (BMI < 18.5) {
      bmiCategory = "Underweight";
    } else if (BMI < 25) {
      bmiCategory = "Normal Weight";
    } else if (BMI < 30) {
      bmiCategory = "Overweight";
    } else if (BMI < 35) {
      bmiCategory = "Obesity Class I (Overweight)";
    } else if (BMI < 40) {
      bmiCategory = "Obesity Class II (Severe Overweight)";
    } else {
      bmiCategory = "Obesity Class III (Very Severe or Morbid Obesity)";
    }

    score.textContent = parseFloat(BMI.toFixed(2));
    resultHeading.textContent = "Your BMI is...";
    resultDescribe.textContent = `Your BMI suggests you’re ${bmiCategory}.`;
  }
});
