let num = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let showMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }
  if (guess) {
    if (score > 0) {
      if (guess == num) {
        showMessage("Correct Number");
        document.querySelector(".number").textContent = num;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = score;
        }
      } else {
        showMessage(num < guess ? "Number is high" : " Number is low");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      showMessage("You lose");
      document.querySelector(".score").textContent = score;
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    num = Math.floor(Math.random() * 20) + 1;
    showMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  });
});
