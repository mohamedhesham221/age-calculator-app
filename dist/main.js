let yearInput = document.getElementById("year"),
  monthInput = document.getElementById("month"),
  dayInput = document.getElementById("day");
let calc = document.getElementById("form");
let currenDate = new Date();
calc.addEventListener("submit", function (e) {
  e.preventDefault();
  let errorCounter = 0;
  let pastDate = new Date(`${Number(monthInput.value)}-${Number(dayInput.value)}-${Number(yearInput.value)}`);

  function formValidation() {
    if (!dayInput.value) {
      document.getElementById("err-day").textContent = "This field is required";
      dayInput.style.borderColor = "#ff5757";
      dayInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else if (Number(dayInput.value) !== pastDate.getDate()) {
      document.getElementById("err-day").textContent = "Must be a valid date";
      dayInput.style.borderColor = "#ff5757";
      dayInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else if (Number(dayInput.value) > 31) {
      document.getElementById("err-day").textContent = "Must be a valid date";
      dayInput.style.borderColor = "#ff5757";
      dayInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else {
      document.getElementById('days').textContent = dayInput.value;
      document.getElementById("err-day").textContent = "";
      dayInput.style.borderColor = "#dbdbdb";
      dayInput.parentElement.children.item(0).style.color = "#716f6f";
    }
    if (!monthInput.value) {
      document.getElementById("err-month").textContent = "This field is required";
      monthInput.style.borderColor = "#ff5757";
      monthInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else if (Number(monthInput.value) > 12) {
      document.getElementById("err-month").textContent = "Must be a valid date";
      monthInput.style.borderColor = "#ff5757";
      monthInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else {
      document.getElementById("months").textContent = (currenDate.getMonth() + 1) - monthInput.value;
      document.getElementById("err-month").textContent = "";
      monthInput.style.borderColor = "#dbdbdb";
      monthInput.parentElement.children.item(0).style.color = "#716f6f";
    }
    if (!yearInput.value) {
      document.getElementById("err-year").textContent = "This field is required";
      yearInput.style.borderColor = "#ff5757";
      yearInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else if (Number(yearInput.value) > currenDate.getFullYear()) {
      document.getElementById("err-year").textContent = "Must be a valid date";
      yearInput.style.borderColor = "#ff5757";
      yearInput.parentElement.children.item(0).style.color = "#ff5757"
      errorCounter++;
    } else {
      document.getElementById("years").textContent = currenDate.getFullYear() - yearInput.value;
      document.getElementById("err-year").textContent = "";
      yearInput.style.borderColor = "#dbdbdb";
      yearInput.parentElement.children.item(0).style.color = "#716f6f";
    }
    if (errorCounter > 0) {
      document.getElementById("years").textContent = "--";
      document.getElementById("months").textContent = "--";
      document.getElementById("days").textContent = "--";
    }
  }
  formValidation();
})