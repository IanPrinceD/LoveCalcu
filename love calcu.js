function runActivity() {
  var love_score = Math.floor(Math.random() * 100) + 1;

  document.getElementById("loveResult").textContent =
    "Your love score is " + love_score + "%";

  if (love_score > 80) {
    document.getElementById("result").textContent =
      "Your love score is " + love_score + "%." + " You are a good match!";
  } else if (love_score > 40 && love_score <= 80) {
    document.getElementById("result").textContent =
      "Your love score is " +
      love_score +
      "%" +
      " You are both sweet but this is not the right time.";
  } else if (love_score <= 30) {
    document.getElementById("result").textContent =
      "Your love score is " +
      love_score +
      "%" +
      " You both have other prioroties";
  } else {
    document.getElementById("result").textContent =
      "Your love score is " +
      love_score +
      "% " +
      " I think you are good to be friends not lovers.";
  }

  document.getElementById("loveCalculatorForm").reset();
}

function resetForm() {
  document.getElementById("loveCalculatorForm").reset();
  document.getElementById("loveResult").textContent = "";
  document.getElementById("result").textContent = "";
}